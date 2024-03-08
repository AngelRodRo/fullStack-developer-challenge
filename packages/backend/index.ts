import { ApolloServer, type BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

import resolvers from './src/graphql/resolvers';
import { UserService } from './src/services/user';

const typeDefs = readFileSync('./src/graphql/schema.graphql', { encoding: 'utf-8' });

export interface MyContext extends BaseContext {
  token?: string | string[] | undefined
  dataSources: {
    userService: UserService
  }
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers
});

void startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.token,
    dataSources: {
      userService: new UserService()
    }
  }),
  listen: { port: 4000 }
}).then(({ url }) => {
  console.log(`🚀 Server listening at: ${url}`);
});
