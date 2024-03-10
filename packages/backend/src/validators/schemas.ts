import { object, string, type ObjectSchema } from 'yup';
import {
  type UserCreateInput,
  type UserEditInput
} from '../__generated__/graphql';

export const userCreationSchema: ObjectSchema<UserCreateInput> = object({
  name: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  address: string().required(),
  password: string().required(),
  phone: string().required()
});

export const userEditionSchema: ObjectSchema<UserEditInput> = object({
  name: string().required(),
  lastName: string().required(),
  address: string().required(),
  phone: string().required()
});
