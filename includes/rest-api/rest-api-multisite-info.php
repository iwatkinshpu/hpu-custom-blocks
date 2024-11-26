<?php
/**
 * Setup REST API endpoint for multisite blog info
 */

/* temporary function namespace: hpu_api_multisite */

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
		$details = get_blog_details( $blog );
		if ( ! $details ) {
			return;
		}
		$data[] = array(
			'id'       => $details->blog_id,
			'name'     => $details->blogname,
			'url'      => $details->siteurl,
			'active'   => $details->public,
			'archived' => $details->archived,
			'deleted'  => $details->deleted,
		);
	}

	return rest_ensure_response( $data );
}

function hpu_api_multisite_register_endpoint() {
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
		)
	) );
}
add_action( 'rest_api_init', 'hpu_api_multisite_register_endpoint' );
