<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// wp_enqueue_script(
// 	'airtable-embed',
// 	'https://static.airtable.com/js/embed/embed_snippet_v1.js',
// 	array(),
// 	null,
// 	array( 'in_footer' => true )
// );

?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
		if ( $attributes && isset( $attributes['shareLink'] ) ) {
			$embed_form = str_replace( 'airtable.com/app', 'airtable.com/embed/app', $attributes['shareLink'] );
			$height     = isset( $attributes['height'] ) ? $attributes['height'] : '533px';
			$autoHeight = isset( $attributes['useAutoHeight'] ) ? $attributes['useAutoHeight'] : false;
			?>
			<iframe
				class="airtable-embed<?php echo ( $autoHeight ) ? ' airtable-dynamic-height' : ''; ?>"
				src="<?php echo esc_url( $embed_form ); ?>"
				frameborder="0"
				onmousewheel=""
				width="100%"
				height="<?php echo $height; ?>"
			></iframe>
			<?php
			if ( $autoHeight ) {
				wp_enqueue_script(
					'airtable-embed',
					'https://static.airtable.com/js/embed/embed_snippet_v1.js',
					array(),
					null,
					array( 'in_footer' => true )
				);
				// wp_enqueue_script( 'airtable-embed' );
			}
		}
	?>
</div>
