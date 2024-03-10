'use client';

import { CreateUserModal } from '@/components/UserManagement/CreateUserModal';
import { Button } from '@/components/Button';
import { BasicTable } from '@/components/BasicTable';
import {
  UserColumns,
  useUserColumns,
} from '@/components/UserManagement/hooks/useUserColumns';
import { useCallback, useState } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { useModal } from '@/hooks/useModal';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/graphql/queries';
import { useUserActions } from '@/components/UserManagement/hooks/useUserActions';
import { User, UserCreateInput, UserEditInput } from '@/__generated__/graphql';
import { EditUserModal } from '@/components/UserManagement/EditUserModal';

export const UsersTable = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [selectedUser, setSelectedUser] = useState<User>();
  const {
    isModalVisible: isCreateModalVisible,
    showModal: showCreateModal,
    hideModal: hideCreateModal,
  } = useModal();
  const {
    isModalVisible: isEditModalVisible,
    showModal: showEditModal,
    hideModal: hideEditModal,
  } = useModal();

  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    variables: {
      skip: pagination.pageIndex * pagination.pageSize,
      take: pagination.pageSize,
    },
  });

  const { handleCreateUser, handleRemove, handleEditUser } = useUserActions({
    refetch,
  });

  const handleSelectedUser = useCallback(
    (user: User) => {
      showEditModal();
      setSelectedUser(user);
    },
    [showEditModal],
  );

  const columns = useUserColumns({
    handleRemove,
    handleSelectedUser,
  });

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        {isCreateModalVisible && (
          <CreateUserModal
            onClose={hideCreateModal}
            onCreateUser={handleCreateUser}
          />
        )}
        {isEditModalVisible && selectedUser && (
          <EditUserModal
            user={selectedUser}
            onClose={hideEditModal}
            onEditUser={handleEditUser}
          />
        )}

        <div className="w-1/5">
          <Button onClick={showCreateModal}>Create new user</Button>
        </div>
        {data && (
          <BasicTable<UserColumns>
            pagination={pagination}
            setPagination={setPagination}
            total={data.users.total}
            data={data.users.items}
            columns={columns}
          />
        )}
      </div>
    </div>
  );
};
