import { UserService } from '../../../services/user';

const userService = new UserService();

export const user = async (): Promise<Array<{ name: string }>> => {
  const users = await userService.getAll();
  return users;
};
