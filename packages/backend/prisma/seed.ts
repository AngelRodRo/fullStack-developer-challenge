import { faker } from '@faker-js/faker';
import { PrismaClient, type Prisma } from '@prisma/client';
import { hash } from '../src/utils/encryption';

const prisma = new PrismaClient();

if (!['development', 'local'].includes(process.env.NODE_ENV ?? 'local')) {
  throw new Error('It is not allowed to seed production databases');
}

const createRandomUsers = async (): Promise<Prisma.UserCreateInput> => ({
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  password: await hash('123456'),
  phone: faker.phone.number(),
  email: faker.internet.email()
});

async function main (): Promise<void> {
  const randomUsers: Prisma.UserCreateInput[] = [];
  for (let i = 0; i < 100; i++) {
    randomUsers.push(await createRandomUsers());
  }
  try {
    await prisma.user.createMany({
      data: randomUsers
    });
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
