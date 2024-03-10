import 'dotenv/config';

import { ApolloServer, type BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import resolvers from './src/graphql/resolvers';
import { UserService } from './src/services/user';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import { permissions } from './src/permissions';

const typeDefs = readFileSync('./src/graphql/schema.graphql', {
  encoding: 'utf-8'
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const schemaWithPermissions = applyMiddleware(schema, permissions);

export interface MyContext extends BaseContext {
  token?: string
  dataSources: {
    userService: UserService
  }
}

const server = new ApolloServer<MyContext>({
  schema: schemaWithPermissions
});

void startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.authorization,
    dataSources: {
      userService: new UserService()
    }
  }),
  listen: { port: 4000 }
}).then(({ url }) => {
  console.log(`🚀 Server listening at: ${url}`);
});
