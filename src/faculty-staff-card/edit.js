import { useState, useEffect } from '@wordpress/element';
import { SearchControl, Spinner, Popover } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postID }                          = attributes;
	const [ posts, setPosts ]                 = useState( [] );
	const [ post, setPost ]                   = useState( null );
	const [ imageData, setImageData ]         = useState( null );
	const [ searchInput, setSearchInput ]     = useState( '' );
	const [ isLoading, setIsLoading ]         = useState( false );
	const [ isPopoverOpen, setIsPopoverOpen ] = useState( false );

	// Fetch posts for selector
	useEffect( () => {
		setIsLoading( true );
		const fetchPosts = async ( apiQuery ) => {
			try {
				let apiQuery = searchInput
					? '?search=' + searchInput + '&per_page=20'
					: '?per_page=50&orderby=date';
				const response = await fetch ( `${ window.location.origin }/wp-json/wp/v2/faculty-staff${ apiQuery }` );
				if ( response.ok ) {
					const data = await response.json();
					setPosts( data.map( ( result ) => ( { label: result.title.rendered, value: result.id } ) ) );
				}
			}
			catch ( error ) {
				console.log( 'Error fetching posts:', error );
			}
			finally {
				setIsLoading( false );
			}
		};

		// Setup the timeout query
		const searchQuery = setTimeout( () => { 
			fetchPosts()
		}, 200 );
		// reset the timeout on input
		return () => {
			clearTimeout( searchQuery );
		}
	}, [ searchInput ] );

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

	// create control for search & selection of profiles
	const profileSearchControls = ( post ) => {
		return (
			<div className='faculty-staff-card editor-search-control'>
				{ post && (
					<div className='selected-result'>
						<span>{ post.label }</span>
					</div>
				)}
				<SearchControl
					label='Select Directory Profile'
					value={ searchInput }
					onChange={ ( value ) => {
						setSearchInput( value );
						setIsPopoverOpen( true );
					} }
					__nextHasNoMarginBottom
				/>
				{ isPopoverOpen && (
					<Popover
						className='faculty-staff-card search-results'
						onClose={ () => setIsPopoverOpen( false ) }
						position='bottom'
					>
						<ul className='search-results'>
							{ isLoading && <Spinner /> }
							{ posts.map( ( result ) => (
								<li
									key={ result.value || index }
									onClick={ () => setAttributes( { postID: parseInt( result.value, 10 ) } ) }
								>
									{ result.label || 'No Label' }
								</li>
							) ) }
						</ul>
					</Popover>
				) }
			</div>
		)
	}

	// Return editor
	return (
		<>
			<InspectorControls>
				{ profileSearchControls( post ) }
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
