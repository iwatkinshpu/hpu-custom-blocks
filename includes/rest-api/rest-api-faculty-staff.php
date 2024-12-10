<?php
/**
 * Setup REST API endpoint for faculty-staff directory
 */

/* temporary function namespace: hpu_api_directory */

function hpu_api_directory_get_profile_details( $post ) {

	// Setup image info
	$image       = array();
	$image['id'] = get_post_thumbnail_id( $post->ID );
	if ( $image['id'] ) {
		$image['url']       = wp_get_attachment_image_url( $image['id'], 'full' );
		$image['medium']    = wp_get_attachment_image_url( $image['id'], 'medium' );
		$image['thumbnail'] = wp_get_attachment_image_url( $image['id'], 'thumbnail' );
		$image['alt']       = get_post_meta( $image['id'], '_wp_attachment_image_alt', true);
	}

	// Initial postdata array
	$post_data = array(
		'id'          => $post->ID,
		'url'         => get_permalink( $post->ID ),
		'title'       => array(
			'rendered' => get_the_title( $post ),
			'full'     => get_the_title( $post ),
		),
		'image'       => $image,
		'first_name'  => '',
		'last_name'   => '',
		'job_role'    => '',
		'location'    => '',
		'phone'       => '',
		'email'       => '',
		'description' => '',
		'biography'   => '',
		'education'   => array(),
		'majors'      => array(),
	);

	if ( function_exists( 'get_field' ) ) {

		// List of directly accessible fields
		$fields = array (
			'first_name',
			'last_name',
			'job_role',
			'location',
			'phone',
			'email',
			'description',
			'biography',
		);

		// Set the post_data for each field
		foreach ( $fields as $field ) {
			$post_data[ $field ] = get_field( $field, $post->ID ) ?? '';
		}

		// repeater fields
		$post_data['education'] = hpu_api_directory_get_fields( 'education', $post->ID );
		$post_data['majors']    = hpu_api_directory_get_fields( 'majors',    $post->ID );

		// Potentially prefer shorter title
		if ( $post_data['first_name'] && $post_data['last_name' ] ) {
			$post_data['title']['rendered'] = $post_data['first_name'] . ' ' . $post_data['last_name'];
		}
	}

	return $post_data;
}

function hpu_api_directory_custom_search( $where, $query ) {
	global $wpdb;

	if ( $query->get( 'profile_search' ) ) {
		$search    = $query->get( 'profile_search' );
		$like_term = '%' . $wpdb->esc_like( $search ) . '%';

		$where .= "
			AND (
				$wpdb->posts.post_title LIKE '$like_term'
				OR EXISTS (
					SELECT 1
					FROM $wpdb->postmeta
					WHERE $wpdb->posts.ID = $wpdb->postmeta.post_id
					AND (
						( meta_key = 'job_role' AND meta_value LIKE '$like_term' )
						OR ( meta_key = 'phone' AND meta_value LIKE '$like_term' )
						OR ( meta_key = 'email' AND meta_value LIKE '$like_term' )
					)
				)
			)
		";
	}

	return $where;
}
add_filter( 'posts_where', 'hpu_api_directory_custom_search', 10, 2 );

function hpu_api_directory_get_profiles( $request ) {
	$id       = $request->get_param( 'id' );
	$include  = $request->get_param( 'include' );
	$page     = $request->get_param( 'page' ) ?? 1;
	$per_page = $request->get_param( 'per_page' ) ?? 10;
	$search   = $request->get_param( 'search' );
	$data = array();

	// Default args
	$args = array(
		'post_type'           => 'faculty-staff',
		'post_status'         => 'publish',
		'paged'               => $page,
		'posts_per_page'      => $per_page,
	);

	// If ID set, search specific ID
	if ( $id ) {
		$args['p'] = $id;
	}

	// If search is set, do the search
	else if ( $search ) {
		$args['profile_search'] = $search;
	}

	// If include set, search group of IDs - ?id parameter takes priority
	else if ( $include ) {
		$post_ids         = explode( ',', $include );
		$args['post__in'] = $post_ids;
	}

	// Fetch the posts
	$profile_query = new WP_Query( $args );

	// Iterate through posts and populated the data
	foreach ( $profile_query->posts as $post ) {

		$data[] = hpu_api_directory_get_profile_details( $post );
	}

	return rest_ensure_response( $data );
}

function hpu_api_directory_get_profile_by_id( $request ) {
	$post_id = $request->get_param( 'id' );
	$post    = get_post( $post_id );
	$data    = hpu_api_directory_get_profile_details( $post);
	return rest_ensure_response( $data );
}

function hpu_api_directory_get_fields( $repeater_field, $post_id ) {

	// Bail if get_field isn't a valid function
	if ( ! function_exists( 'get_field' ) ) {
		return;
	}

	// iterate through rows for the title fields and build an array
	$results = array();
	$rows    = get_field( $repeater_field, $post_id );
	if ( $rows ) {
		foreach ( $rows as $row ) {
			$results[] = $row['title'] ?? '';
		}
	}
	return $results;
}

function hpu_api_directory_register_endpoint() {

	// hpu/v1/directory
	register_rest_route( 'hpu/v1', 'directory', array(
		'methods'             => 'GET',
		'callback'            => 'hpu_api_directory_get_profiles',
		'args'                => array(
			'id' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param );
				},
				'sanitize_callback' => 'absint',
			),
			'include' => array(
				'validate_callback' => function( $param, $request, $key ) {
					$ids = explode( ',', $param );
					foreach ( $ids as $id ) {
						if ( ! is_numeric( $id ) ) {
							return false;
						}
					}
					return true;
				},
			),
			'page' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param ) && $param > 0;
				},
				'sanitize_callback' => 'absint',
			),
			'per_page' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param ) && $param > 0 && $param <= 100;
				},
				'sanitize_callback' => 'absint',
			),
			'search' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_string( $param ) && strlen( $param ) <= 40;
				},
				'sanitize_callback' => 'sanitize_text_field',
			),
			'meta_search' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_string( $param ) && strlen( $param ) <= 40;
				},
				'sanitize_callback' => 'sanitize_text_field',
			),
		),
		'permission_callback' => '__return_true',
	) );

	// hpu/v1/directory/<id>
	register_rest_route( 'hpu/v1', 'directory/(?P<id>\d+)', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_directory_get_profile_by_id',
		'args'     => array(
			'id' => array (
				'required' => true,
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param );
				},
			),
		),
		'permission_callback' => '__return_true',
	) );
}
add_action( 'rest_api_init', 'hpu_api_directory_register_endpoint' );
