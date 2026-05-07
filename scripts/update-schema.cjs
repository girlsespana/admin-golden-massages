const {execSync} = require('child_process');
const dotenv = require('dotenv');

dotenv.config({path: '.env.local'});

const graphqlEndpoint = process.env.VITE_API_GRAPHQL_URL;

if (!graphqlEndpoint) {
    throw new Error('Missing required environment variable VITE_API_GRAPHQL_URL. Please check your .env.local file.');
}

const schemaPath = 'schema.graphql';

try {
    execSync(`get-graphql-schema ${graphqlEndpoint} > ${schemaPath}`, {stdio: 'inherit'});
} catch (error) {
    console.error('Error fetching schema:', error);
}
