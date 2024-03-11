import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicTable } from '@/components/BasicTable';
import '@testing-library/jest-dom';
import { createColumnHelper } from '@tanstack/react-table';
import { UserColumns } from '@/components/UserManagement/hooks/useUserColumns';

describe('BasicTable', () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
    }),
  ];

  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  const pagination = {
    pageIndex: 0,
    pageSize: 5, // Assuming initial page size is 5
  };

  const setPagination = jest.fn(); // Mock setPagination function

  it('renders table with correct data and controls', () => {
    const { getByText, getByLabelText } = render(
      <BasicTable
        data={data}
        total={data.length}
        columns={columns}
        setPagination={setPagination}
        pagination={pagination}
      />,
    );

    expect(getByText('id')).toBeInTheDocument();
    expect(getByText('name')).toBeInTheDocument();

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Doe')).toBeInTheDocument();
  });
});
