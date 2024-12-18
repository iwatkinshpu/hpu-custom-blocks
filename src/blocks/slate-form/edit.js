import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	useEffect( () => {

		// Create the slate script element
		const script = document.createElement( 'script' );
		script.async = true;
		script.src   = `https://discover.highpoint.edu/register/?id=${ attributes.formID }&output=embed&div=form_${ attributes.formID }` + ( ( location.search.length > 1 ) ? '&' + location.search.substring( 1 ) : '' );

		// Insert the script into the head
		document.head.appendChild(script);

		// Clean up the script on unmount
		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, [ attributes.formID ] );

	return (
		<>
			<InspectorControls>
				<PanelBody
					title='Slate Form Settings'
					__nextHasNoMarginBottom
				>
					<TextControl
						label='Slate Form ID'
						value={ attributes.formID }
						onChange={ ( formID ) => setAttributes( { formID } ) }
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps() }
				id={ `form_${ attributes.formID }` }
			>Loading....</div>
		</>
	);
}
