import { type Resolvers } from '../../__generated__/graphql';
import { dateScalar } from '../scalars/Date';

import * as Mutation from './mutations';
import * as Query from './queries';

const resolvers: Resolvers = {
  Date: dateScalar,
  Query,
  Mutation
};

export default resolvers;
