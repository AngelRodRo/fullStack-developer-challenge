import { PrismaClient, type User } from '@prisma/client';

export class UserService {
  private readonly prisma: PrismaClient;

  constructor () {
    this.prisma = new PrismaClient();
  }

  async countAll (): Promise<number> {
    return await this.prisma.user.count();
  }

  async getAll ({ skip, take }: { skip?: number, take?: number }): Promise<Array<Partial<User>>> {
    const users = await this.prisma.user.findMany({
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
