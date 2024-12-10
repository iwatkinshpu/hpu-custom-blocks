import { useState, useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls, SelectBlogControls } from '@hpu-wp/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postArray = [], postType, blogID } = attributes;
	const [ filter, setFilter ]                = useState( {} );

	useEffect( () => {
		setFilter( {
			postType: postType || null,
			blogID: blogID || null,
		} )
	}, [ postType, blogID ] );

	console.log( filter );

	const resetPosts = ( reason='' ) => {
		console.log( 'resetPosts', reason );
		setAttributes( { postArray: [] } );
	}

	return (
		<>
			<InspectorControls>
				<SelectBlogControls
					blogID={ blogID }
					onChange={ ( value ) => {
						resetPosts( 'blogID: ' + blogID );
						setAttributes( { blogID: value } )
					} }
				/>
				<div className='hpu-multipost-testing-select-wrapper'>
					<SelectControl
						label='Select Post Type'
						value={ postType || 'posts' }
						onChange={ ( value ) => {
							resetPosts( 'postType: ' + postType );
							setAttributes( { postType: value } );
						} }
						options={ [
							{ value: 'posts', label: 'Posts' },
							{ value: 'pages', label: 'Pages' },
							{ value: 'menu-items', label: 'Menu Items' },
						] }
						__nextHasNoMarginBottom
					/>
				</div>
				<PostSearchControls
					postArray={ postArray }
					postType={ filter?.postType }
					blogID={ filter?.blogID }
					wpNonce={ window.HPUCustomBlocksData.restNonce }
					onChange={ ( value ) => {
						setAttributes( { postArray: value } )
					} }
				/>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<p>Testing MultiPost PostSearchControls component</p>
				{ Array.isArray( postArray ) && postArray?.map( ( post, index ) => (
					<p key={ index }>{ post }</p>
				) ) }
			</div>
		</>
	);
}
