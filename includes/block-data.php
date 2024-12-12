<?php
/**
 * Enqueue plugin settings for availability within blocks
 */

function hpu_custom_blocks_blog_info() {
	$blog_info = [];
	$blogs     = get_sites( array(
		'number' => 0,
	) );
	foreach ( $blogs as $blog ) {
		$blog_info[ $blog->blog_id ] = [
			'name'   => $blog->blogname,
			'domain' => $blog->domain,
			'path'   => $blog->path,
			'url'    => $blog->siteurl,
		];
	}
	return $blog_info;
}

function hpu_custom_blocks_data_localization( $script_handle ) {
	$blog_info = hpu_custom_blocks_blog_info();
	$data = [
		'directoryHome' => 1, // To be pulled dynamically later
		'assetPath'     => HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'assets/',
		'blogs'         => $blog_info,
	];
	
	// Localize the data to the block script
	wp_localize_script( $script_handle, 'HPUCustomBlocksData', $data );
}
