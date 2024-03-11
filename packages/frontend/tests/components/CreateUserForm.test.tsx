import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreateUserForm } from '@/components/UserManagement/CreateUserForm';
import '@testing-library/jest-dom';

describe('CreateUserForm', () => {
  const onCreateUserMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders form inputs and submits with correct data', async () => {
    const { getByLabelText, getByTestId, getByText } = render(
      <CreateUserForm onCreateUser={onCreateUserMock} />,
    );

    fireEvent.change(getByTestId('input-name'), { target: { value: 'John' } });
    fireEvent.change(getByTestId('input-lastname'), {
      target: { value: 'Doe' },
    });
    fireEvent.change(getByTestId('input-address'), {
      target: { value: '123 Street' },
    });
    fireEvent.change(getByTestId('input-phone'), {
      target: { value: '123456789' },
    });
    fireEvent.change(getByTestId('input-email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByTestId('input-password'), {
      target: { value: 'password123' },
    });

    await userEvent.click(getByText('Create'));

    await waitFor(() => {
      expect(onCreateUserMock).toHaveBeenCalledWith({
        name: 'John',
        lastName: 'Doe',
        address: '123 Street',
        phone: '123456789',
        email: 'john@example.com',
        password: 'password123',
      });
    });
  });
});
