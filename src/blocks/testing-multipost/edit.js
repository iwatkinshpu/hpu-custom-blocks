import { useEffect } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PostSearchControls, SelectBlogControls } from '@hpu-wp/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { postArray = [], postType = 'posts', blogID = 1 } = attributes;

	const handlePostTypeChange = ( value ) => {
		if ( value !== postType ) {
			setAttributes( { postType: value, postArray: [] } ); // Reset postArray when postType changes
		}
	};

	const handleBlogIDChange = ( value ) => {
		const intValue = parseInt( value );
		if ( intValue !== blogID ) {
			setAttributes( { blogID: intValue, postArray: [] } ); // Reset postArray when blogID changes
		}
	};

	useEffect( () => {
		if ( postType !== attributes.postType || blogID !== attributes.blogID ) {
			setAttributes( { postArray: [] } );
		}
	}, [ postType, blogID ] );

	return (
		<>
			<InspectorControls>
				<SelectBlogControls
					blogID={ blogID }
					onChange={ handleBlogIDChange }
				/>
				<div className='hpu-multipost-testing-select-wrapper'>
					<SelectControl
						label='Select Post Type'
						value={ postType || 'posts' }
						onChange={ handlePostTypeChange }
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
					postType={ postType }
					blogID={ blogID }
					wpNonce={ window?.wpApiSettings?.nonce }
					onChange={ ( value ) => { setAttributes( { postArray: value } ) } }
				/>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<p>Testing MultiPost PostSearchControls component</p>
				<pre>postArray: { JSON.stringify( postArray ) }</pre>
				<pre>attributes: { JSON.stringify( attributes ) }</pre>
			</div>
		</>
	);
}
