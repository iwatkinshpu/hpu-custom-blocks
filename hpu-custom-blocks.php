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

if ( ! defined( 'HPU_CUSTOM_BLOCKS_VERSION' ) ) {
	define( 'HPU_CUSTOM_BLOCKS_VERSION', '0.1.0' );
}

if ( ! defined( 'HPU_CUSTOM_BLOCKS_PLUGIN_URL' ) ) {
	define( 'HPU_CUSTOM_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'HPU_CUSTOM_BLOCKS_PLUGIN_PATH' ) ) {
	define( 'HPU_CUSTOM_BLOCKS_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
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
require_once HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'includes/block-data.php';

/**
 * Register custom API endpoints to support HPU features through the REST API
 */
require_once HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'includes/rest-api.php';

/**
 * Register custom blocks
 */
require_once HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'includes/register-blocks.php';
