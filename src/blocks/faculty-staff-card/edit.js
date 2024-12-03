import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls } from '@hpu-wp/components';

export default function Edit( { attributes, setAttributes } ) {
	const { postID }        = attributes;
	const [ post, setPost ] = useState( null );

	// Fetch selected post to access data
	useEffect( () => {
		if ( postID ) {
			const fetchPost = async () => {
				const response = await fetch ( `${ window.location.origin }/wp-json/hpu/v1/directory?id=${ postID }` );
				if ( response.ok ) {
					const data = await response.json();
					setPost( data[0] );
				}
			};
			fetchPost();
		}
		else {
			setPost( null );
		}
	}, [ postID ] );

	const conformPhoneNumber = ( phoneNumber ) => {
		const pattern = /^[^\d]*\+?1?[^\d]*(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})[^\d]*$/;
		return phoneNumber.replace( pattern, '+1 ($1) $2-$3' );
	}

	// Return editor
	return (
		<>
			<InspectorControls>
				<PostSearchControls
					blogPath='/'
					postID={ postID }
					postType='faculty-staff'
					searchLabel='Select Directory Profile'
					onChange={ ( value ) => { setAttributes( { postID: value } ) } }
				/>
			</InspectorControls>
			<div { ...useBlockProps() }>

				{ post ? (
					<div className='profile-card'>

						{ post.image && (
							<div className='profile-card-image'>
								<img
									src={ post.image?.thumbnail ?? post.image?.url }
									alt={ post.title + ' Profile Photo' }
								/>
							</div>
						) }

						<div className='profile-card-text'>
							<div className='profile-card-title profile-selected'>
								<a data-preview-href={ post.link }>{ post.title }</a>
							</div>

							{ post.job_role && (
								<div className='profile-card-role'>{ post.job_role }</div>
							) }

							{ post.email && (
								<div className='profile-card-email'>
									<span className='icon'>
										{/* <svg fill='#330072' width='15' height='15'>
											<use xlink:href='#icon_email'></use>
											</svg> */}
									</span>
									<a data-preview-href={ `mailto:${ post.email }` }>{ post.email }</a>
								</div>
							) }

							{ post.phone && (
								<div className='profile-card-phone'>
									<span className='icon'>
										{/* <svg fill='#330072' width='15' height='15'>
											<use xlink:href='#icon_phone'></use>
											</svg> */}
									</span>
									<a data-preview-href={ `tel:${ conformPhoneNumber( post.phone ) }` }>{ conformPhoneNumber( post.phone ) }</a>
								</div>
							) }
						</div>

					</div>
				) : (
					<div className='profile-card profile-not-selected'>
						<span>Please Select a Directory Profile from the side bar.</span>
					</div>
				) }

			</div>
		</>
	);
}
