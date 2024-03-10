import { editUser } from '../../../../src/graphql/resolvers/mutations';
import { type MyContext } from '../../../../index';

describe('editUser resolver', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should edit the user and return the updated user', async () => {
    const id = 1;
    const userInput = { name: 'Jane', lastName: 'Smith', address: '456 Elm St', phone: '987-654-3210' };

    const mockUpdate = jest.fn().mockResolvedValue({ id, ...userInput });

    const context = { dataSources: { userService: { update: mockUpdate } } } as unknown as MyContext;

    const result = await editUser(null, { id, userInput }, context);

    expect(result).toEqual({ id, ...userInput });
    expect(mockUpdate).toHaveBeenCalledWith(id, userInput);
  });
});
