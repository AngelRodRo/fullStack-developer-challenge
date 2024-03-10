import { shield } from 'graphql-shield';
import { isAuthorized } from '../rules';

export const permissions = shield({
  Query: {
    users: isAuthorized
  },
  Mutation: {
    createUser: isAuthorized,
    editUser: isAuthorized,
    removeUser: isAuthorized
  }
});
