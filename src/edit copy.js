import { useState, useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postID }                  = attributes;
	const [ posts, setPosts ]         = useState( [] );
	const [ post, setPost ]           = useState( null );
	const [ imageData, setImageData ] = useState( null );

	// Fetch posts for selector
	useEffect( () => {
		const fetchPosts = async () => {
			const response = await fetch ( `${ window.location.origin }/wp-json/wp/v2/faculty-staff?per_page=100` );
			if ( response.ok ) {
				const data = await response.json();
				setPosts( data.map( ( post ) => ( { label: post.title.rendered, value: post.id } ) ) );
			}
		};
		fetchPosts();
	}, [] );

	// Fetch selected post to access data
	useEffect( () => {
		if ( postID ) {
			const fetchPost = async () => {
				const response = await fetch ( `${ window.location.origin }/wp-json/wp/v2/faculty-staff/${ postID }` );
				if ( response.ok ) {
					const data = await response.json();
					setPost( data );
				}
			};
			fetchPost();
		}
		else {
			setPost( null );
		}
	}, [ postID ] );

	// Fetch selected image data
	useEffect( () => {
		if ( post && post.featured_media ) {
			const fetchImageData = async ( attachmentID ) => {
				const response = await fetch( `${ window.location.origin }/wp-json/wp/v2/media/${ attachmentID }` );
				if (response.ok) {
					const data     = await response.json();
					const thumbUrl = data.media_details.sizes.thumbnail.source_url;
					const imageUrl = data.media_details.sizes.medium.source_url;
					setImageData( { thumbUrl, imageUrl } );
				}
				return null;
			};
			fetchImageData( post.featured_media );
		}
		else {
			setImageData( null );
		}
	}, [ post ] );

	const profileSelectorControls = () => {
		return (
			<SelectControl
				className='editor-select-control'
				value={ postID }
				label='Select Directory Profile'
				options={ [
					{ label: '--None Selected--', value: null },
					...posts
				] }
				onChange={ ( value ) => setAttributes( { postID: parseInt( value, 10 ) } ) }
				__nextHasNoMarginBottom
			/>
		)
	}

	// Return editor
	return (
		<>
			<InspectorControls>
				{ profileSelectorControls() }
			</InspectorControls>
			<div { ...useBlockProps() }>

				{ post ? (
					<div className='profile-card'>

						{ imageData && (
							<div className='profile-card-image'>
								<img
									src={ imageData.thumbUrl }
									alt={ post.title + ' Profile Photo' }
								/>
							</div>
						) }

						<div className='profile-card-text'>
							<div className='profile-card-title profile-selected'>
								<a data-preview-href={ post.link }>{ post.title.rendered }</a>
							</div>

							{ post.acf.job_role && (
								<div className='profile-card-role'>{ post.acf.job_role }</div>
							) }

							{ post.acf.email && (
								<div className='profile-card-email'>
									<span className='icon'>
										{/* <svg fill='#330072' width='15' height='15'>
											<use xlink:href='#icon_email'></use>
											</svg> */}
									</span>
									<a data-preview-href={ `mailto:${ post.acf.email }` }>{ post.acf.email }</a>
								</div>
							) }

							{ post.acf.phone && (
								<div className='profile-card-phone'>
									<span className='icon'>
										{/* <svg fill='#330072' width='15' height='15'>
											<use xlink:href='#icon_phone'></use>
											</svg> */}
									</span>
									<a data-preview-href={ `tel:+1 ${ post.acf.phone }` }>+1 { post.acf.phone }</a>
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
