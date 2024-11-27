<?php
/**
 * Setup REST API endpoint for multisite blog info
 */

/* temporary function namespace: hpu_api_multisite */

function hpu_api_multisite_get_blog_details( $blog_id ) {
	$details = get_blog_details( $blog_id );
	if ( ! $details ) {
		return array();
	}
	$data = array(
		'id'       => $details->blog_id,
		'name'     => $details->blogname,
		'domain'   => $details->domain,
		'path'     => $details->path,
		'url'      => $details->siteurl,
		'active'   => $details->public,
		'archived' => $details->archived,
		'deleted'  => $details->deleted,
	);
	return $data;
}

function hpu_api_multisite_get_blog_info( $request ) {
	$blog_id  = $request->get_param( 'id' );
	$includes = $request->get_param( 'includes' );
	$data     = array();

	if ( $includes ) {
		$blogs = explode( ',', $includes );
	}
	elseif ( $blog_id ) {
		$blogs = [ $blog_id ];
	}
	else {
		$blogs = get_sites( array( 'fields' => 'ids' ) );
	}

	foreach ( $blogs as $blog ) {
		$data[] = hpu_api_multisite_get_blog_details( $blog );
	}

	return rest_ensure_response( $data );
}

function hpu_api_multisite_get_blog_by_id( $request ) {
	$blog_id = $request->get_param( 'id' );
	$data    = hpu_api_multisite_get_blog_details( $blog_id );
	return rest_ensure_response( $data );
}

function hpu_api_multisite_get_blog_taxonomy( $request ) {
	$blog_id  = $request->get_param( 'id' );
	$taxonomy = $request->get_param( 'taxonomy' );

	switch_to_blog( $blog_id );
	if ( taxonomy_exists( $taxonomy ) ) {
		$terms = get_terms( array(
			'taxonomy'   => $taxonomy,
			'hide_empty' => false,
		) );
	}
	restore_current_blog();

	$data = array();
	foreach ( $terms as $term ) {
		$data[] = array(
			'id'    => $term->term_id,
			'name'  => $term->name,
			'slug'  => $term->slug,
			'type'  => $term->taxonomy,
			'count' => $term->count
		);
	}

	return rest_ensure_response( $data );
}

function hpu_api_multisite_register_endpoint() {
	// hpu/v1/blogs
	register_rest_route( 'hpu/v1', 'blogs', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_info',
		'args'     => array(
			'id' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param );
				}
			),
			'includes' => array(
				'validate_callback' => function( $param, $request, $key ) {
					$split_param = explode( ',', $param );
					foreach ( $split_param as $param_part ) {
						if ( ! is_numeric( $param_part ) ) {
							return false;
						}
					}
					return true;
				}
			),
		),
		'permission_callback' => '__return_true',
	) );
	// hpu/v1/blogs/<id>
	register_rest_route( 'hpu/v1', 'blogs/(?P<id>\d+)', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_by_id',
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
	// hpu/v1/blogs/<id>/<taxonomy>
	register_rest_route( 'hpu/v1', 'blogs/(?P<id>\d+)/(?P<taxonomy>.+)', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_taxonomy',
		'args'     => array(
			'id' => array (
				'required'          => true,
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param );
				},
			),
			'taxonomy' => array(
				'required'          => true,
				'validate_callback' => function( $param, $request, $key ) {
					return is_string( $param );
				},
			),
		),
		'permission_callback' => '__return_true',
	) );
	/* Individual term endpoints
	// hpu/v1/blogs/<id>/categories
	register_rest_route( 'hpu/v1', 'blogs/(?P<id>\d+)/categories', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_categories',
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
	// hpu/v1/blogs/<id>/associated-sites
	register_rest_route( 'hpu/v1', 'blogs/(?P<id>\d+)/associated-sites', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_associated_sites',
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
	// hpu/v1/blogs/<id>/terms
	register_rest_route( 'hpu/v1', 'blogs/(?P<id>\d+)/terms', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_terms',
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
	 */
}
add_action( 'rest_api_init', 'hpu_api_multisite_register_endpoint' );