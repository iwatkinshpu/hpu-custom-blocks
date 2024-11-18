<?php
/**
 * Setup faculty-staff post-type
 */

/**
 * Setup REST API endpoint for faculty-staff post-type
 */

function hpu_add_featured_image_to_faculty_staff() {
	register_rest_field( 'faculty-staff', 'featured_image_data', [
		'get_callback' =>  function( $post_arr ) {
			$image_id = get_post_thumbnail_id( $post_arr['id'] );
			if ( $image_id ) {
				$image = wp_get_attachment_image_src( $image_id, 'full' );
				$alt_text = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
				return [
					'url' => $image[0],
					'alt' => $alt_text,
				];
			}
			return null;
		},
		'schema' => null,
	] );
}
hpu_add_featured_image_to_faculty_staff();

function hpu_register_faculty_staff_rest_api_endpoint() {
	register_rest_route( 'wp/v2', '/faculty-staff-fields', array(
		'methods'  => 'GET',
		'callback' => 'get_faculty_staff_posts',
	) );
}
add_action( 'rest_api_init', 'hpu_register_faculty_staff_rest_api_endpoint' );

function get_faculty_staff_posts() {
	$args = array(
		'post_type'      => 'faculty-staff',
		'posts_per_page' => -1,
	);

	$faculty_staff_posts = get_posts( $args );
	$data                = array();

	foreach ( $faculty_staff_posts as $post ) {
		$image        = array();
		$image['id']  = get_post_thumbnail_id( $post->ID );
		if ( $image['id'] ) {
			$image['url'] = wp_get_attachment_image_url( $image['id'], 'full' );
			$image['alt'] = get_post_meta( $image['id'], '_wp_attachment_image_alt', true);
		}

		$post_data = array(
			'id'          => $post->ID,
			'title'       => get_the_title( $post ),
			'image_id'    => $image['id'],
			'image_url'   => isset( $image['url'] ) ? $image['url'] : '',
			'image_alt'   => isset( $image['alt'] ) ? $image['alt'] : '',
			'first_name'  => '',
			'last_name'   => '',
			'job_role'    => '',
			'location'    => '',
			'phone'       => '',
			'email'       => '',
			'description' => '',
			'biography'   => '',
			// 'education'   => '',
			// 'majors'      => '',
		);

		if ( function_exists( 'get_field' ) ) {
			$post_data['first_name']  = get_field( 'first_name',  $post->ID ) ?? '';
			$post_data['last_name']   = get_field( 'last_name',   $post->ID ) ?? '';
			$post_data['job_role']    = get_field( 'job_role',    $post->ID ) ?? '';
			$post_data['location']    = get_field( 'location',    $post->ID ) ?? '';
			$post_data['phone']       = get_field( 'phone',       $post->ID ) ?? '';
			$post_data['email']       = get_field( 'email',       $post->ID ) ?? '';
			$post_data['description'] = get_field( 'description', $post->ID ) ?? '';
			$post_data['biography']   = get_field( 'biography',   $post->ID ) ?? '';
			// repeater fields
			// $post_data['education']   = get_field( 'education',   $post->ID ) ?? '';
			// $post_data['majors']      = get_field( 'majors',      $post->ID ) ?? '';
		}

		$data[] = $post_data;
	}

	return rest_ensure_response( $data );
}
