import { type PrismaClient, type User } from '@prisma/client';
import bcrypt from 'bcrypt';
import client from '../database';

type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type UserWithoutPassword = Omit<User, 'password'>;

const saltRounds = 10;

export class UserService {
  private readonly client: PrismaClient;

  constructor () {
    this.client = client;
  }

  async countAll (): Promise<number> {
    return await this.client.user.count();
  }

  async getAll ({ skip, take }: { skip?: number, take?: number }): Promise<UserWithoutPassword[]> {
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

  async create ({ name, lastName, email, password, address, phone }: UserCreateInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return await this.client.user.create({
      data: {
        name,
        lastName,
        email,
        password: hashedPassword,
        address,
        phone
      }
    });
  }

  async update (id: number, { name, lastName, email, password, address, phone }: Partial<User>): Promise<User> {
    return await this.client.user.update({
      where: {
        id
      },
      data: {
        name,
        lastName,
        email,
        password,
        address,
        phone
      }
    });
  }

  async remove (id: number): Promise<number> {
    const user = await this.client.user.delete({ where: { id } });
    return user.id;
  }
}
