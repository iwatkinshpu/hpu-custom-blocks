const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		'block-variations': path.resolve( __dirname, 'src/block-variations/index.js' ),
	},
	output: {
		...defaultConfig.output,
		filename: ( chunkData ) => {
			if ( chunkData.chunk.name === 'block-variations' ) {
				return 'variations/index.js';
			}
			return defaultConfig.output.filename;
		},
		path: path.resolve( __dirname, 'build' ),
	},
}