<?php
/**
 * Plugin Name:       HPU Custom Blocks
 * Plugin URI:        https://www.highpoint.edu/
 * Description:       HPU Custom Blocks
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            HPU Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hpu-custom-blocks
 *
 * @package Hpu
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function hpu_custom_blocks_block_init() {
	$build_dir = plugin_dir_path( __FILE__ ) . 'build/';
	foreach ( glob( $build_dir . '*/' ) as $block_dir ) {
		if ( ! file_exists( $block_dir . 'block.json' ) ) {
			error_log( 'hpu-custom-blocks ### failed to register block at ' . $block_dir . ' --- no block.json file found' );
			return;
		}
		register_block_type( $block_dir );
	}
}
add_action( 'init', 'hpu_custom_blocks_block_init' );

function maybe_add_acf_to_api() {
    // Loop through all public post types
	if ( function_exists( 'get_fields' ) && current_user_can( 'edit_posts' ) ) {
		foreach ( get_post_types( [ 'public' => true ], 'objects' ) as $post_type ) {
			register_rest_field( $post_type->name, 'acf', [
				'get_callback' => function( $object ) {
						return get_fields( $object['id'] );
				},
				'schema' => null,
			] );
		}
	}
};
add_action( 'rest_api_init', 'maybe_add_acf_to_api' );
