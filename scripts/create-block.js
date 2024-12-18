const { execSync } = require( 'child_process' );
const path = require( 'path' );

const blockName = process.argv[2];

if ( ! blockName ) {
    console.error( 'Error: Block name is required. Usage: npm run create-block <block-name>' );
    process.exit(1);
}

const blockPath = path.join( 'src', 'blocks', blockName );
const command = `npx @wordpress/create-block ${blockName} \
    --no-plugin \
    --category theme \
    --variant dynamic \
    --namespace hpu \
    --target-dir ${ blockPath }`;

try {
    execSync( command, { stdio: 'inherit' } );
    console.log( `Block "${ blockName }" created successfully in src/blocks/${ blockName }` );
} catch ( error ) {
    console.error( 'Failed to create the block:', error.message );
}
