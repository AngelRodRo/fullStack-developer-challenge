import { type PrismaClient, type User } from '@prisma/client';
import client from '../database';

export class UserService {
  private readonly client: PrismaClient;

  constructor () {
    this.client = client;
  }

  async countAll (): Promise<number> {
    return await this.client.user.count();
  }

  async getAll ({ skip, take }: { skip?: number, take?: number }): Promise<Array<Partial<User>>> {
    const users = await this.client.user.findMany({
      select: {
        id: true,
        name: true,
        address: true,
        lastName: true,
        phone: true,
        email: true,
        createdAt: true,
        updatedAt: true
      },
      skip,
      take
    });
    return users;
  }
}
