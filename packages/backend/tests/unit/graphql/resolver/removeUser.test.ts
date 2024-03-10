import { removeUser } from '../../../../src/graphql/resolvers/mutations';
import { type MyContext } from '../../../../index';

describe('removeUser resolver', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should remove the user and return the ID', async () => {
    const id = 1;

    const mockRemove = jest.fn().mockResolvedValue(id);

    const context = { dataSources: { userService: { remove: mockRemove } } } as unknown as MyContext;

    const result = await removeUser(null, { id }, context);

    expect(result).toBe(id);
    expect(mockRemove).toHaveBeenCalledWith(id);
  });
});
