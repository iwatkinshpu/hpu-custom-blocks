import { useState, useEffect, useRef, useCallback } from '@wordpress/element';
import { SearchControl, Spinner, Popover, Button } from '@wordpress/components';

export function PostSearchControls( props ) {
	const [ postID,        setPostID        ] = useState( props.postID || null );
	const [ post,          setPost          ] = useState( null );
	const [ queriedPosts,  setQueriedPosts  ] = useState( [] );
	const [ isLoading,     setIsLoading     ] = useState( false );
	const [ isPopoverOpen, setIsPopoverOpen ] = useState( false );
	const [ searchTrigger, setSearchTrigger ] = useState( false );
	const searchInputRef                      = useRef( '' );

	// handle changes to search Input
	const handleSearchInputChange = ( value ) => {
		searchInputRef.current = value;
		setSearchTrigger( value );
		setIsPopoverOpen( true );
	}

	// Handle missing onChange props
	const handleChange = ( value ) => {
		setPostID( value );
		if ( 'function' === typeof props.onChange ) {
			props.onChange( value );
		}
	}

	// Strip slashes for endpoint construction
	const stripSlashes = ( string ) => string?.replace( /^\/|\/$/, '' ) || '';

	// Construct API endpoint for queries
	const constructEndPoint = useCallback( () => {
		const apiDomain    = stripSlashes( props?.apiDomain )   || window.location.origin;
		const apiNameSpace = stripSlashes( props?.apiBasePath ) || 'wp-json/wp/v2';
		const postType     = stripSlashes( props?.postType )    || 'posts';
		return `${ apiDomain }/${ apiNameSpace }/${ postType }`;
	}, [ props.apiDomain, props.apiBasePath, props.postType ] );

	// Fetch posts for selector
	useEffect( () => {
		if ( ! searchTrigger ) {
			setQueriedPosts( [] );
			setIsLoading( false );
			return;
		}

		setIsLoading( true );

		// retrieve post list
		const fetchPosts = async () => {
			try {
				const apiEndPoint = constructEndPoint();
				const searchQuery = searchInputRef.current
					? `?search=${ searchInputRef.current }&per_page=20`
					: '?per_page=20&orderby=date';
				const apiQuery    = ( apiEndPoint + searchQuery );
				const response    = await fetch ( apiQuery );
				if ( response.ok ) {
					const data = await response.json();
					setQueriedPosts(
						data.map( ( result ) => ( {
							label: result?.title?.rendered || 'Untitled',
							value: result.id,
						} ) )
					);
				}
			}
			catch ( error ) {
				console.log( 'Error fetching posts: ', error );
			}
			finally {
				setIsLoading( false );
			}
		};

		// Setup the timeout query
		const searchTimeout = setTimeout( fetchPosts, 200 );

		// reset the timeout on additional inputs
		return () => clearTimeout( searchTimeout );

	}, [ searchTrigger, constructEndPoint ] );

	// Fetch post when the PostID changes
	useEffect( () => {
		if ( postID ) {
			const fetchPost = async () => {
				try {
					const apiEndPoint = constructEndPoint();
					const response    = await fetch ( `${ apiEndPoint }/${ postID }` )
					if ( response.ok ) {
						const data = await response.json();
						setPost( data );
					}
				}
				catch ( error ) {
					console.log( 'Error fetching selected post: ', error );
				}
			}
			fetchPost();
		}
		else {
			setPost( null );
		}
	}, [ postID, constructEndPoint ] )

	// Render Component
	return (
		<div className='post-search-control'>
			{ post && (
				<div className='post-search-control-selected'>
					<label>Currently selected</label>
					<div>
						<span>{ post.title?.rendered || post.title }</span>
						<Button
							variant='tertiary'
							size='small'
							isDestructive
							onClick={ () => {
								handleChange( null );
							} }
						>X</Button>
					</div>
				</div>
			) }
			<SearchControl
				className='post-search-control-selector'
				label={ props.searchLabel || 'Search Posts' }
				hideLabelFromVision={ false }
				value={ searchInputRef.current }
				onChange={ handleSearchInputChange }
				__nextHasNoMarginBottom
			/>
			{ isPopoverOpen && (
				<Popover
					className='post-search-control-results'
					onClose={ () => setIsPopoverOpen( false ) }
					position='bottom'
				>
					<ul className='search-results' aria-live='polite'>
						{ isLoading && <Spinner /> }
						{ queriedPosts.map( ( result ) => (
							<li
								role='button'
								tabIndex={ 0 }
								key={ result.value }
								onClick={ () => {
									handleChange( result.value );
									setIsPopoverOpen( false );
								} }
							>
								{ result.label }
							</li>
						) ) }
						{ ! isLoading && 0 === queriedPosts.length && (
							<li className="no-results">No Results Found. Sorry.</li>
						) }
					</ul>
				</Popover>
			) }
		</div>
	)
}
