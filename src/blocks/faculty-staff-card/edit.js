import { useState, useEffect } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls } from '@hpu-wp/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postID }                  = attributes;
	const [ post,      setPost      ] = useState( null );
	const [ isLoading, setIsLoading ] = useState( false );

	// Fetch selected post to access data
	useEffect( () => {
		if ( postID ) {

			setIsLoading( null === post );

			const fetchPost = async () => {
				try {
					const response = await fetch ( `${ window.location.origin }/wp-json/hpu/v1/directory/${ postID }/` );
					if ( response.ok ) {
						const data = await response.json();
						setPost( data );
					}
				}
				catch ( error ) {
					console.warn( 'Error fetching profile: ', error );
				}
				finally {
					setIsLoading( false );
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

	// Retrieve the default profile image using localized data from plugin
	const defaultProfileImage = `${ window.HPUCustomBlocksData.assetPath }images/default-profile-image.jpg`;

	// Return editor
	return (
		<>
			<InspectorControls>
				<PostSearchControls
					blogPath='/'
					postID={ postID }
					apiNameSpace='hpu/v1/directory'
					searchLabel='Select Directory Profile'
					selectedLabel='Selected Profile'
					onChange={ ( value ) => { setAttributes( { postID: value } ) } }
				/>
			</InspectorControls>
			<div { ...useBlockProps() }>

				{ post ? (
					<div className='profile-card'>

						<div className='profile-card-image'>
							<img
								src={ post?.image?.thumbnail ?? post?.image?.url ?? defaultProfileImage }
								alt={ post?.title?.rendered + ' Profile Photo' }
							/>
						</div>

						<div className='profile-card-text'>

							<div className='profile-card-title profile-selected'>
								<a data-preview-href={ post.link }>{ post?.title?.full }</a>
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

						<div className='profile-card-image'>
							{ isLoading ? ( <Spinner/> ) : (
								<img
									src={ defaultProfileImage }
									alt='Default Profile Photo'
								/>
							) }
						</div>

						<div className='profile-card-text'>Please Select a Directory Profile from the side bar.</div>
					</div>
				) }

			</div>
		</>
	);
}
