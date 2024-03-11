import { createColumnHelper } from '@tanstack/react-table';
import { User } from '@/__generated__/graphql';
import { useCallback, useMemo } from 'react';

export interface UserColumns extends User {
  actions: string;
}

interface UserColumnsOptions {
  handleSelectedUser: (user: User) => void;
  handleRemove: (id: number) => void;
}

export const useUserColumns = ({
  handleRemove,
  handleSelectedUser,
}: UserColumnsOptions) => {
  const columnHelper = createColumnHelper<UserColumns>();

  const renderActions = useCallback(
    (user: User) => {
      return (
        <div>
          <div
            className="bg-amber-200 w-fit px-2 rounded cursor-pointer"
            onClick={() => handleSelectedUser(user)}
          >
            Edit
          </div>
          {user.id && (
            <div
              className="bg-red-500 w-fit px-2 rounded text-white cursor-pointer"
              onClick={() => handleRemove(user.id ?? 0)}
            >
              Delete
            </div>
          )}
        </div>
      );
    },
    [handleRemove, handleSelectedUser],
  );

  return [
    columnHelper.accessor('name', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('lastName', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('email', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('phone', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('address', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('actions', {
      cell: (info) => renderActions(info.row.original),
    }),
  ];
};
