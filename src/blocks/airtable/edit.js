import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, RangeControl, BaseControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { shareLink, useAutoHeight, formHeight } = attributes;

	const pattern = /airtable\.com(\/embed)?\/app([a-zA-Z0-9]+)/i;
	const match   = shareLink.match( pattern );

	useEffect( () => {

		// Purge previous Airtable script elements
		document.querySelectorAll( '.airtable-embed-snippet' ).forEach( ( script ) => {
			script.parentNode.removeChild( script );
		} );

		// Create the Airtable script element
		const script = document.createElement( 'script' );
		script.async = true;
		script.src   = 'https://static.airtable.com/js/embed/embed_snippet_v1.js';
		script.classList.add( 'airtable-embed-snippet' );

		// Insert the script into the head
		document.head.appendChild( script );

		// Clean up the script on unmount
		return () => {
			if ( script.parentNode ) {
				script.parentNode.removeChild( script );
			}
		};
	}, [ useAutoHeight ] );

	// Parse the form height as an integer, defaulting to 533
	const height   = parseInt( formHeight, 10 ) || 533;

	// Convert the share link to an embed link
	const embedUrl = shareLink.replace( 'airtable.com/app', 'airtable.com/embed/app' );

	return (
		<>
			<InspectorControls>
				<PanelBody title='Airtable Form Settings'>
					<TextControl
						label='Airtable Share Link'
						value={ shareLink }
						onChange={ ( value ) => setAttributes( { shareLink: value } ) }
					/>
					<BaseControl
						label='Airtable Form Height'
						help='Changes to Auto-height may require a reload to view in editor.'
					>
						<RangeControl
							value={ height }
							onChange={ ( value ) => setAttributes( { formHeight: value } ) }
							disabled={ useAutoHeight }
							min={ 200 }
							max={ 1000 }
						/>
						<ToggleControl
							label='Auto Height'
							checked={ useAutoHeight }
							onChange={ ( value ) => setAttributes( { useAutoHeight: value } ) }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{ match ? (
					<iframe
						className={ `airtable-embed` + ( useAutoHeight ? ' airtable-dynamic-height' : '' ) }
						src={ embedUrl }
						width='100%'
						height={ height }
					/>
				) : (
					<p>Please enter a valid Airtable share link.</p>
				) }
			</div>
		</>
	);
}
