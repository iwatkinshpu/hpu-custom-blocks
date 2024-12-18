import { useEffect } from '@wordpress/element';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { AssociatedSiteControls, PostSearchControls, SelectBlogControls } from '@hpu-wp/components';
import './editor.scss';
export default function Edit( { attributes, setAttributes } ) {
	const {
		postArray = [],
		postType = 'posts',
		associatedSites = [],
		blogID = 1
	} = attributes;

	const handlePostTypeChange = ( value ) => {
		if ( value === postType ) {
			return;
		}
		if ( value !== 'posts' ) {
			setAttributes( { postType: value, postArray: [], associatedSites: [] } ); // Reset postArray when postType changes
		}
		else {
			setAttributes( { postType: value, postArray: [] } ); // Reset postArray when postType changes
		}
	};

	const handleBlogIDChange = ( value ) => {
		const intValue = parseInt( value );
		if ( intValue !== blogID ) {
			setAttributes( { blogID: intValue, postArray: [] } ); // Reset postArray when blogID changes
		}
	};

	// Reset postArray when postType or blogID changes on page load
	useEffect( () => {
		if ( postType !== attributes.postType || blogID !== attributes.blogID ) {
			setAttributes( { postArray: [] } );
		}
	}, [ postType, blogID ] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title='Post Selection'
					__nextHasNoMarginBottom
				>
					<SelectBlogControls
						className='hpu-multipost-testing--select-blog-control'
						blogID={ blogID }
						onChange={ handleBlogIDChange }
					/>
					<SelectControl
						label='Select Post Type'
						className='hpu-multipost-testing--select-post-type-control'
						value={ postType || 'posts' }
						onChange={ handlePostTypeChange }
						options={ [
							{ value: 'posts', label: 'Posts' },
							{ value: 'pages', label: 'Pages' },
							{ value: 'menu-items', label: 'Menu Items' },
						] }
						__nextHasNoMarginBottom
					/>
					{ postType === 'pages' && (
						<AssociatedSiteControls
							className='hpu-multipost-testing--associated-site-control'
							isMultiSelect={ true }
							value={ associatedSites }
							onChange={ ( value ) => { setAttributes( { associatedSites: [ value ] } ) } }
						/>
					) }
					{ postType === 'posts' && (
						<AssociatedSiteControls
							className='hpu-multipost-testing--associated-site-control'
							value={ associatedSites[0] }
							onChange={ ( value ) => { setAttributes( { associatedSites: value } ) } }
						/>
					) }
					<PostSearchControls
						className='hpu-multipost-testing--post-search-control'
						postArray={ postArray }
						postType={ postType }
						blogID={ blogID }
						wpNonce={ window?.wpApiSettings?.nonce }
						onChange={ ( value ) => { setAttributes( { postArray: value } ) } }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<p>Testing MultiPost PostSearchControls component</p>
				<pre>postArray: { JSON.stringify( postArray ) }</pre>
				<pre>attributes: { JSON.stringify( attributes ) }</pre>
			</div>
		</>
	);
}
