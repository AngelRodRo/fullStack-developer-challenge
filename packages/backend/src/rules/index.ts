import { rule } from 'graphql-shield';
import jwt from 'jsonwebtoken';
import { type MyContext } from '../..';
import { type User } from '../__generated__/graphql';

export const isAuthorized = rule()(async (_, __, ctx: MyContext) => {
  const authorization = ctx.token;
  if (authorization === undefined || authorization === null) {
    return false;
  }

  const token = authorization.replace('Bearer', '').trim();

  const { id } = jwt.decode(token) as User;

  return !(id == null);
});
