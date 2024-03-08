import { GraphQLError } from 'graphql';
import { ValidationError } from 'yup';
import { type MyContext } from '../../..';
import { type MutationCreateUserArgs, type MutationEditUserArgs, type MutationRemoveUserArgs, type User } from '../../__generated__/graphql';
import { userCreationSchema, userEditionSchema } from '../../validators/schemas';

export const createUser = async (_: any, { userInput }: MutationCreateUserArgs, { dataSources }: MyContext): Promise<User> => {
  try {
    await userCreationSchema.validate(userInput);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'BAD_USER_INPUT'
        }
      });
    }
  }
  const user = await dataSources.userService.create(userInput);
  return user;
};

export const editUser = async (_: any, { id, userInput }: MutationEditUserArgs, { dataSources }: MyContext): Promise<User> => {
  try {
    await userEditionSchema.validate(userInput);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: 'BAD_USER_INPUT'
        }
      });
    }
  }
  const user = await dataSources.userService.update(id, userInput);
  return user;
};

export const removeUser = async (_: any, { id }: MutationRemoveUserArgs, { dataSources }: MyContext): Promise<number> => {
  const result = await dataSources.userService.remove(id);
  return result;
};
