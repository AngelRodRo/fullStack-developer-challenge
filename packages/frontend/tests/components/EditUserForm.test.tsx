import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EditUserForm } from '@/components/UserManagement/EditUserForm';
import '@testing-library/jest-dom';

describe('EditUserForm', () => {
  const user = {
    id: 1,
    email: '',
    name: 'John',
    lastName: 'Doe',
    address: '123 Street',
    phone: '123456789',
  };

  const onEditUserMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders form inputs with correct default values and submits with updated values', async () => {
    const { getByTestId, getByText } = render(
      <EditUserForm user={user} onEditUser={onEditUserMock} />
    );

    expect(getByTestId('input-name')).toHaveValue('John');
    expect(getByTestId('input-lastname')).toHaveValue('Doe');
    expect(getByTestId('input-address')).toHaveValue('123 Street');
    expect(getByTestId('input-phone')).toHaveValue('123456789');

    fireEvent.change(getByTestId('input-name'), { target: { value: 'Jane' } });
    fireEvent.change(getByTestId('input-lastname'), { target: { value: 'Smith' } });
    fireEvent.change(getByTestId('input-address'), { target: { value: '456 Avenue' } });
    fireEvent.change(getByTestId('input-phone'), { target: { value: '987654321' } });

    fireEvent.click(getByText('Edit'));

    await waitFor(() => {
      expect(onEditUserMock).toHaveBeenCalledWith(1, {
        name: 'Jane',
        lastName: 'Smith',
        address: '456 Avenue',
        phone: '987654321',
      });
    });
  });


});
