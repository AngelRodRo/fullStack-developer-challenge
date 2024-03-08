import { PrismaClient } from '@prisma/client';

export class UserService {
  private readonly prisma: PrismaClient;

  constructor () {
    this.prisma = new PrismaClient();
  }

  async getAll (): Promise<Array<{ name: string }>> {
    const users = await this.prisma.user.findMany({
      select: {
        name: true,
        address: true,
        lastName: true,
        phone: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return users;
  }
}
