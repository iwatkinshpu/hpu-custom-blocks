<?php
/**
 * Setup REST API endpoint for faculty-staff directory
 */

/* temporary function namespace: hpu_api_directory */

function hpu_api_directory_get_profiles( $request ) {
	$id       = $request->get_param( 'id' );
	$includes = $request->get_param( 'includes' );
	$page     = $request->get_param( 'page' ) ?: 1;
	$per_page = $request->get_param( 'per_page' ) ?: 10;
	$search   = $request->get_param( 'search' );
	$data = array();

	// Default args
	$args = array(
		'post_type'      => 'faculty-staff',
		'paged'          => $page,
		'posts_per_page' => $per_page,
		's'              => $search,
	);

	// If ID set, search specific ID
	if ( $id ) {
		$args['p'] = $id;
	}

	// If Includes set, search group of IDs - ?id parameter takes priority
	if ( $includes ) {
		$blog_ids         = explode( ',', $includes );
		$args['post__in'] = $blog_ids;
	}

	// Fetch the posts
	$faculty_staff_posts = get_posts( $args );

	// Iterate through posts and populated the data
	foreach ( $faculty_staff_posts as $post ) {

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
			'title'       => get_the_title( $post ),
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
		}

		$data[] = $post_data;
	}

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
		)
	) );
}
add_action( 'rest_api_init', 'hpu_api_directory_register_endpoint' );
