import { type Resolvers } from '../../__generated__/graphql';
import { dateScalar } from '../scalars/Date';
import queries from './queries';

const resolvers: Resolvers = {
  Date: dateScalar,
  ...queries
};

export default resolvers;
