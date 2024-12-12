<?php
/**
 * Setup REST API endpoint for multisite blog info
 */

/* temporary function namespace: hpu_api_multisite */

function hpu_api_multisite_filter_blog_details( $blog ) {
	$data = array(
		'id'       => $blog->blog_id,
		'name'     => $blog->blogname,
		'domain'   => $blog->domain,
		'path'     => $blog->path,
		'url'      => $blog->siteurl,
		'active'   => $blog->public,
		'archived' => $blog->archived,
		'deleted'  => $blog->deleted,
	);
	return $data;
}

function hpu_api_multisite_get_blog_info( $request ) {
	$blog_id  = $request->get_param( 'id' );
	$include  = $request->get_param( 'include' );
	$exclude  = $request->get_param( 'exclude' );
	$per_page = $request->get_param( 'per_page' ) ?? 100;
	$page     = $request->get_param( 'page' ) ?? 1;
	$search   = $request->get_param( 'search' );
	$data     = array();

	// base args - simulate pagination
	$args = array(
		'number' => $per_page,
		'offset' => ( $page - 1 ) * $per_page,
	);

	// optional params
	if ( $include ) {
		$args['site__in'] = explode( ',', $include );
	}
	if ( $exclude ) {
		$args['site__not_in'] = explode( ',', $exclude );
	}
	if ( $blog_id ) {
		$args['site__in'] = [ $blog_id ];
	}
	if ( $search ) {
		$args['search'] = $search;
	}

	$blogs = get_sites( $args );

	foreach ( $blogs as $blog ) {
		$data[] = hpu_api_multisite_filter_blog_details( $blog );
	}

	return rest_ensure_response( $data );
}

function hpu_api_multisite_get_blog_by_id( $request ) {
	$blog_id   = $request->get_param( 'blog_id' );
	$blog_info = get_sites( array( 'site__in' => [ $blog_id ] ) );
	$data      = hpu_api_multisite_filter_blog_details( $blog_info[0] );
	return rest_ensure_response( $data );
}

function hpu_api_multisite_get_blog_taxonomy( $request, $tax_type = null ) {
	$taxonomy = $tax_type ?? $request->get_param( 'taxonomy' );
	$blog_id  = $request->get_param( 'blog_id' );
	$tax_id   = $request->get_param( 'id' );
	$include  = $request->get_param( 'include' );
	$exclude  = $request->get_param( 'exclude' );
	$per_page = $request->get_param( 'per_page' ) ?? 100;
	$page     = $request->get_param( 'page' ) ?? 1;
	$search   = $request->get_param( 'search' );
	$terms    = array();

	switch_to_blog( $blog_id );

	if ( ! taxonomy_exists( $taxonomy ) ) {
		restore_current_blog();
		return rest_ensure_response( [] );
	}

	$args = array(
		'taxonomy'   => $taxonomy,
		'hide_empty' => false,
		'number'     => $per_page,
		'offset'     => ( $page - 1 ) * $per_page,
	);

	if ( $include ) {
		$args['include'] = explode( ',', $include );
	}
	if ( $exclude ) {
		$args['exclude'] = explode( ',', $exclude );
	}
	if ( $tax_id ) {
		$args['include'] = [ $tax_id ];
	}
	if ( $search ) {
		$args['search'] = $search;
	}

	$terms = get_terms( $args );
	restore_current_blog();

	$data = array();
	foreach ( $terms as $term ) {
		$data[] = array(
			'id'    => $term->term_id,
			'name'  => $term->name,
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
			'per_page' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param ) && $param >= 0 && $param <= 100;
				},
				'sanitize_callback' => 'absint',
			),
			'page' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param ) && $param > 0;
				},
				'sanitize_callback' => 'absint',
			),
			'search' => array(
				'validate_callback' => function( $param, $request, $key ) {
					return is_string( $param ) && strlen( $param ) > 0 && strlen( $param ) <= 40;
				},
			),
			'include' => array(
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
			'exclude' => array(
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
	register_rest_route( 'hpu/v1', 'blogs/(?P<blog_id>\d+)', array(
		'methods'  => 'GET',
		'callback' => 'hpu_api_multisite_get_blog_by_id',
		'args'     => array(
			'blog_id' => array (
				'required' => true,
				'validate_callback' => function( $param, $request, $key ) {
					return is_numeric( $param );
				},
			),
		),
		'permission_callback' => '__return_true',
	) );

	$tax_args = array(
		'blog_id' => array (
			'required'          => true,
			'validate_callback' => function( $param, $request, $key ) {
				return is_numeric( $param );
			},
		),
		'per_page' => array(
			'validate_callback' => function( $param, $request, $key ) {
				return is_numeric( $param ) && $param >= 0 && $param <= 100;
			},
			'sanitize_callback' => 'absint',
		),
		'page' => array(
			'validate_callback' => function( $param, $request, $key ) {
				return is_numeric( $param ) && $param > 0;
			},
			'sanitize_callback' => 'absint',
		),
		'search' => array(
			'validate_callback' => function( $param, $request, $key ) {
				return is_string( $param ) && strlen( $param ) > 0 && strlen( $param ) <= 40;
			},
		),
		'id' => array (
			'validate_callback' => function( $param, $request, $key ) {
				return is_numeric( $param );
			},
		),
		'include' => array (
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
		'exclude' => array(
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
	);

	// hpu/v1/blogs/<id>/tax/<taxonomy>
	register_rest_route( 'hpu/v1', 'blogs/(?P<blog_id>\d+)/tax/(?P<taxonomy>[a-zA-Z-_]+)', array(
		'methods'             => 'GET',
		'callback'            => 'hpu_api_multisite_get_blog_taxonomy',
		'args'                => $tax_args,
		'permission_callback' => '__return_true',
	) );

	// hpu/v1/blogs/<id>/categories
	register_rest_route( 'hpu/v1', 'blogs/(?P<blog_id>\d+)/categories', array(
		'methods'             => 'GET',
		'callback'            => function( $request ) {
			return hpu_api_multisite_get_blog_taxonomy( $request, 'category' );
		},
		'args'                => $tax_args,
		'permission_callback' => '__return_true',
	) );

	// hpu/v1/blogs/<id>/tags
	register_rest_route( 'hpu/v1', 'blogs/(?P<blog_id>\d+)/tags', array(
		'methods'             => 'GET',
		'callback'            => function( $request ) {
			return hpu_api_multisite_get_blog_taxonomy( $request, 'post_tag' );
		},
		'args'                => $tax_args,
		'permission_callback' => '__return_true',
	) );
}
add_action( 'rest_api_init', 'hpu_api_multisite_register_endpoint' );
