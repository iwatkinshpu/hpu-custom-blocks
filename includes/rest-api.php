<?php
/**
 * Register custom API Endpoints for HPU Theme Support
 */

$api_dir = plugin_dir_path( __FILE__ ) . 'rest-api/';
foreach ( glob( $api_dir . '*.php' ) as $extension ) {
	require_once $extension;
}
