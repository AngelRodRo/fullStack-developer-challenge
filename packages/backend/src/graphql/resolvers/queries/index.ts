import { type QueryResolvers } from '../../../__generated__/graphql';
import * as userQueries from './user';

const queries: QueryResolvers = {
  ...userQueries
};

export default {
  Query: queries
};
