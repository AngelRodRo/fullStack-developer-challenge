import { type MyContext } from '../../../../index';
import { createUser } from '../../../../src/graphql/resolvers/mutations';

// Mock Prisma client methods
const mockCreateUser = jest.fn();

// Mock dataSources object with Prisma client
const mockDataSources = {
  userService: {
    create: mockCreateUser
  }
};

describe('createUser Resolver', () => {
  it('should create a user successfully', async () => {
    const userInput = { email: 'test@example.com', password: '123456', name: 'John', lastName: 'Doe', address: '123 Main St', phone: '123-456-7890' };

    mockCreateUser.mockResolvedValue(userInput);

    const context = { dataSources: mockDataSources } as unknown as MyContext;

    const result = await createUser(null, { userInput }, context);

    expect(result).toEqual(userInput);
    expect(mockCreateUser).toHaveBeenCalledWith(userInput);
  });
});
