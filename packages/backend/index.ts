import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import resolvers from './src/graphql/resolvers';

const typeDefs = readFileSync('./src/graphql/schema.graphql', { encoding: 'utf-8' });

interface MyContext {
  token?: string
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers
});

void startStandaloneServer(server, { context: async ({ req }) => ({ token: req.headers.token }), listen: { port: 4000 } }).then(({ url }) => {
  console.log(`🚀 Server listening at: ${url}`);
});
