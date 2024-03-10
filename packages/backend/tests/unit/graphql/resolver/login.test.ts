import { login } from '../../../../src/graphql/resolvers/mutations';
import { type MyContext } from '../../../../index';

describe('login resolver', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should return user and token upon successful login', async () => {
    const userCredentials = { email: 'test@example.com', password: 'password123' };

    const mockLogin = jest.fn().mockResolvedValue({ user: { id: 1, email: userCredentials.email, name: 'John', lastName: 'Doe', address: '123 Main St', phone: '123-456-7890' }, token: 'token123' });

    const context = { dataSources: { userService: { login: mockLogin } } } as unknown as MyContext;

    const result = await login(null, { userCredentials }, context);

    expect(result).toEqual({ user: { id: 1, email: userCredentials.email, name: 'John', lastName: 'Doe', address: '123 Main St', phone: '123-456-7890' }, token: 'token123' });
    expect(mockLogin).toHaveBeenCalledWith(userCredentials.email, userCredentials.password);
  });
});
