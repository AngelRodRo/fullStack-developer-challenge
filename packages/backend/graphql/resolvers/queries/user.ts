import { UserService } from '../../../services/user';

const userService = new UserService();

export default {
  user: async () => {
    const users = await userService.getAll();
    return users;
  }
};
