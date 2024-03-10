import { type PrismaClient, type User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import client from '../database';
import { hash } from '../utils/encryption';

type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type UserWithoutPassword = Omit<User, 'password'>;
interface UserSuccessLoginParams {
  user: User
  token: string
}

if (
  process.env.JWT_SECRET_KEY === null ||
  process.env.JWT_SECRET_KEY === undefined
) {
  throw new Error('A JWT Secret key is required before initializing the app');
}

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export class UserService {
  private readonly client: PrismaClient;

  constructor () {
    this.client = client;
  }

  async countAll (): Promise<number> {
    return this.client.user.count();
  }

  async getAll ({
    skip,
    take
  }: {
    skip?: number
    take?: number
  }): Promise<UserWithoutPassword[]> {
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

  async create ({
    name,
    lastName,
    email,
    password,
    address,
    phone
  }: UserCreateInput): Promise<User> {
    const hashedPassword = await hash(password);

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

  async update (
    id: number,
    { name, lastName, email, password, address, phone }: Partial<User>
  ): Promise<User> {
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

  async login (
    email: string,
    password: string
  ): Promise<UserSuccessLoginParams> {
    const user = await this.client.user.findUnique({ where: { email } });
    if (user == null) {
      throw new Error('User not found !');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error('Password is not correct');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET_KEY);
    return {
      user,
      token
    };
  }
}
