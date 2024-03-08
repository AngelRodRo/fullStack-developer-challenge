import { faker } from '@faker-js/faker';
import { PrismaClient, type Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const createRandomUsers = (): Prisma.UserCreateInput => ({
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  password: faker.string.hexadecimal(),
  phone: faker.phone.number(),
  email: faker.internet.email()
});

async function main (): Promise<void> {
  const randomUsers = faker.helpers.multiple(createRandomUsers, { count: 100 });
  await prisma.user.createMany({
    data: randomUsers
  });
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
