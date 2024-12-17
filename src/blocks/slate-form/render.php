<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	if ( $attributes  && isset( $attributes['formID'] ) ) {
		$form_id = $attributes['formID'];
		?>
		<div id="form_<?php esc_attr_e( $form_id ); ?>"> Loading...</div>
		<script>
			/*<![CDATA[*/
			var script = document.createElement('script');
			script.async = 1;
			script.src =
				'<?php echo esc_js( "https://discover.highpoint.edu/register/?id=$form_id&output=embed&div=form_$form_id" ); ?>'
					+ ( ( location.search.length > 1 ) ? '&' + location.search.substring(1) : '' );
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(script, s); /*]]>*/
		</script>
		<?php
	}
	?>
</div>
