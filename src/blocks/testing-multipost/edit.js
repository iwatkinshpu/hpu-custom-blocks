import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls } from '@hpu-wp/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postArray = [] } = attributes;

	return (
		<>
			<InspectorControls>
				<PostSearchControls
					postArray={ postArray }
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
