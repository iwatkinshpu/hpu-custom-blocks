<?php
/**
 * Register custom blocks
 */

function hpu_custom_blocks_register_blocks() {

	// register the blocks
	$build_dir = HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'build/blocks/';

	foreach ( glob( $build_dir . '*/' ) as $block_dir ) {
		if ( ! file_exists( $block_dir . 'block.json' ) ) {
			error_log( 'hpu-custom-blocks ### failed to register block at ' . $block_dir . ' --- no block.json file found' );
			continue;
		}

		// register block
		$block = register_block_type( $block_dir );

		// localise block data script
		if ( isset( $block->editor_script ) && $block->editor_script ) {
			hpu_custom_blocks_data_localization( $block->editor_script );
		}
	}
}
add_action( 'init', 'hpu_custom_blocks_register_blocks', 10 );

function hpu_custom_blocks_register_block_variations() {
	wp_register_script(
		'hpu-custom-blocks-variations',
		HPU_CUSTOM_BLOCKS_PLUGIN_URL . 'build/variations/index.js',
		[ 'wp-blocks', 'wp-element', 'wp-editor' ],
		filemtime( HPU_CUSTOM_BLOCKS_PLUGIN_PATH . 'build/variations/index.js' ),
		true
	);

	if ( function_exists( 'register_block_type' ) ) {
		wp_enqueue_script( 'hpu-custom-blocks-variations' );
	}
}
add_action( 'enqueue_block_editor_assets', 'hpu_custom_blocks_register_block_variations', 10 );
