<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	
	<?php
	if ( $attributes  && isset( $attributes['postID'] ) ) :
		$post_id = $attributes['postID'];

		$image['id'] = get_post_thumbnail_id( $post_id );
		if ( $image['id'] ) {
			$image['url']   = wp_get_attachment_image_url( $image['id'], 'medium' );
			$image['thumb'] = wp_get_attachment_image_url( $image['id'], 'thumbnail' );
		}

		// If ACF not running/installed - return false
		if ( ! function_exists( 'get_field' ) ) {
			function get_field( $field, $id ) {
				return false;
			}
		}

		$post_data = array(
			'title'     => get_the_title( $post_id ),
			'staff_url' => get_permalink( $post_id ),
			'img_id'    => $image['id'],
			'img_url'   => isset( $image['url'] )   ? $image['url']   : '',
			'thumb_url' => isset( $image['thumb'] ) ? $image['thumb'] : '',
			'job_role'  => get_field( 'job_role', $post_id ),
			'phone'     => get_field( 'phone',    $post_id ),
			'email'     => get_field( 'email',    $post_id ),
		);

		?>
		<div class="profile-card">

			<?php if ( $post_data['img_id'] ) : ?>
				<div class="profile-card-image">
					<img
						src="<?php esc_attr_e( $post_data['thumb_url'] ) ?>"
						alt="<?php esc_attr( $post_data['title'] ) . ' profile photo' ?>"
					/>
				</div>
			<?php endif; ?>

			<div class="profile-card-text">
				<div class="profile-card-title profile-selected">
					<a href="<?php esc_attr_e( $post_data['staff_url'] ); ?>"><?php esc_html_e( $post_data['title'] ); ?></a>
				</div>

				<?php if ( $post_data['job_role'] ) : ?>
					<div class="profile-card-role"><?php esc_html_e( $post_data['job_role'] ); ?></div>
				<?php endif; ?>

				<?php if ( $post_data['email'] ) : ?>
					<div class="profile-card-email">
						<!-- <span class="icon">
							<svg fill="#330072" width="15" height="15">
								<use xlink:href="#icon_email"></use>
							</svg>
						</span> -->
						<a href="mailto:<?php esc_attr_e( $post_data['email'] ); ?>"><?php esc_html_e( $post_data['email'] ); ?></a>
					</div>
				<?php endif; ?>

				<?php if ( $post_data['phone'] ) : ?>
					<div class="profile-card-phone">
						<!-- <span class="icon">
							<svg fill="#330072" width="15" height="15">
								<use xlink:href="#icon_phone"></use>
							</svg>
						</span> -->
						<a href="tel:+1 <?php esc_attr_e( $post_data['phone'] ); ?>">+1 <?php esc_html_e( $post_data['phone'] ); ?></a>
					</div>
				<?php endif; ?>
			</div>

		</div>
	<?php endif; ?>

</div>
