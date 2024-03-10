/*
import React from 'react';
import { render, fireEvent, waitFor, getByTestId, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { LOGIN } from '@/graphql/mutations';
import LoginForm from '@/components/LoginForm';
import { AUTH_TOKEN } from '@/constants';

const mockUserLoginMutation = jest.fn();


const mocks = [
  {
    request: {
      query: LOGIN,
      variables: {
        userInput: {
          email: 'test@example.com',
          password: 'password123',
        },
      },
    },
    result: {
      data: {
        login: {
          token: 'mockedAuthToken',
        },
      },
    },
  },
];

describe('LoginForm component', () => {
  it('submits form with correct data and sets auth token on successful login', async () => {
    const { getByTestId, getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginForm />
      </MockedProvider>
    );

    fireEvent.change(getByTestId('email-input'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(getByTestId('password-input'), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(localStorage.getItem('AUTH_TOKEN')).toEqual('mockToken');
    });
  });
});
*/
