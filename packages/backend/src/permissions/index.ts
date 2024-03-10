import { allow, shield } from 'graphql-shield';
import { isAuthorized } from '../rules';

export const permissions = shield(
  {
    Mutation: {
      login: allow
    }
  },

  { fallbackRule: isAuthorized }
);
