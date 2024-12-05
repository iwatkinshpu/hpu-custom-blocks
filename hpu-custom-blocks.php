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

/**
 * Enqueue plugin settings for availability within blocks
 */

function hpu_custom_blocks_localize_block_data( $script_handle ) {
	$data = [
		'directoryHome' => 1, // To be pulled dynamically later
		'assetPath'    => plugin_dir_url( __FILE__ ) . 'assets/',
	];
	
	// Localize the data to the block script
	wp_localize_script( $script_handle, 'HPUCustomBlocksData', $data );
}

function hpu_custom_blocks_block_init() {

	// register the blocks
	$build_dir = plugin_dir_path( __FILE__ ) . 'build/blocks/';

	foreach ( glob( $build_dir . '*/' ) as $block_dir ) {
		if ( ! file_exists( $block_dir . 'block.json' ) ) {
			error_log( 'hpu-custom-blocks ### failed to register block at ' . $block_dir . ' --- no block.json file found' );
			continue;
		}

		// register block
		$block = register_block_type( $block_dir );

		// localise block data script
		if ( isset( $block->editor_script ) && $block->editor_script ) {
			hpu_custom_blocks_localize_block_data( $block->editor_script );
		}
	}
}
add_action( 'init', 'hpu_custom_blocks_block_init' );

/**
 * Register custom API endpoints to support HPU features through the REST API
 */
function hpu_register_custom_endpoints() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/rest-api.php';
}
add_action( 'init', 'hpu_register_custom_endpoints' );
