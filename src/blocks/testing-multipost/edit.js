import { useState, useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls } from '@hpu-wp/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postArray = [], postType } = attributes;
	console.log( 'attributes', attributes );

	return (
		<>
			<InspectorControls>
				<SelectControl
					label='Select Post Type'
					value={ postType || 'posts' }
					onChange={ ( value ) => { 
						setAttributes( { postType: value, postArray: [] } );
					} }
					options={ [
						{ value: 'posts', label: 'Posts' },
						{ value: 'pages', label: 'Pages' },
						{ value: 'menu-items', label: 'Menu Items' },
					] }
					__nextHasNoMarginBottom
				/>
				<PostSearchControls
					postArray={ postArray }
					postType={ postType }
					wpNonce={ window.HPUCustomBlocksData.restNonce }
					onChange={ ( value ) => { setAttributes( { postArray: value } ) } }
				/>
			</InspectorControls>
			<div { ...useBlockProps() }>
				Testing MultiPost PostSearchControls component
				{ Array.isArray( postArray ) && postArray?.map( ( post, index ) => (
					<p key={ index }>{ post }</p>
				) ) }
			</div>
		</>
	);
}
