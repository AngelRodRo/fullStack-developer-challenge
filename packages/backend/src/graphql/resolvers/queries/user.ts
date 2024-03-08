import { type MyContext } from '../../../..';
import { type QueryUsersArgs, type UserList } from '../../../__generated__/graphql';

const DEFAULT_TAKE = 10;
const DEFAULT_SKIP = 0;

export const users = async (parent: any, { take, skip, filter }: QueryUsersArgs, { dataSources }: MyContext): Promise<UserList> => {
  const takeParam = take !== null ? take : DEFAULT_TAKE;
  const skipParam = skip !== null ? skip : DEFAULT_SKIP;

  const users = await dataSources.userService.getAll({ take: takeParam, skip: skipParam });
  const count = await dataSources.userService.countAll();

  return { total: count, items: users };
};
