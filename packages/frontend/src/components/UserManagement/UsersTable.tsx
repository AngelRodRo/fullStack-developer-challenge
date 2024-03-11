'use client';

import { CreateUserModal } from '@/components/UserManagement/CreateUserModal';
import { Button } from '@/components/Button';
import { BasicTable } from '@/components/BasicTable';
import {
  UserColumns,
  useUserColumns,
} from '@/components/UserManagement/hooks/useUserColumns';
import { useCallback, useRef, useState } from 'react';
import { PaginationState } from '@tanstack/react-table';
import { useModal } from '@/hooks/useModal';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/graphql/queries';
import { useUserActions } from '@/components/UserManagement/hooks/useUserActions';
import { User, UserCreateInput, UserEditInput } from '@/__generated__/graphql';
import { EditUserModal } from '@/components/UserManagement/EditUserModal';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { UNEXPECTED_ERROR } from '@/constants/errorMessages';

export const UsersTable = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    variables: {
      skip: pagination.pageIndex * pagination.pageSize,
      take: pagination.pageSize,
    },
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

  const { handleCreateUser, handleRemove, handleEditUser } = useUserActions();

  const onCreateUser = useCallback(async (data: UserCreateInput) => {
    try {
      await handleCreateUser(data);
      toast.success("User is created successfully!")
      refetch();
      hideCreateModal();
    } catch (e) {
      toast.error(UNEXPECTED_ERROR);
    }
  }, [handleCreateUser, hideCreateModal, refetch]);

  const onEditUser = useCallback(async (id: number, data: UserEditInput) => {
    try {
      await handleEditUser(id, data);
      toast.success("User is edited successfully!")
      refetch();

      hideEditModal();
    } catch (e) {
      toast.error(UNEXPECTED_ERROR);
    }
  }, [handleEditUser, hideEditModal, refetch]);

  const onRemoveUser = useCallback(async (id: number) => {
    try {
      await handleRemove(id);
      refetch();
      toast.success("User is removed successfully!")
    } catch (e) {
      toast.error(UNEXPECTED_ERROR);
    }
  }, [handleRemove, refetch]);

  const handleSelectedUser = useCallback(
    (user: User) => {
      showEditModal();
      setSelectedUser(user);
    },
    [showEditModal],
  );

  const columns = useUserColumns({
    handleRemove: onRemoveUser,
    handleSelectedUser,
  });

  const renderTable = useCallback(() => {
    if (loading) {
      return (
        <div className="w-full h-96 flex items-center justify-center">
          <ClipLoader
            color="blue"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )
    }
    if (data) {
      return <BasicTable<UserColumns>
        pagination={pagination}
        setPagination={setPagination}
        total={data.users.total}
        data={data.users.items}
        columns={columns}
      />
    }
  }, [columns, data, loading, pagination])

  return (
    <div className="mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        {isCreateModalVisible && (
          <CreateUserModal
            onClose={hideCreateModal}
            onCreateUser={onCreateUser}
          />
        )}
        {isEditModalVisible && selectedUser && (
          <EditUserModal
            user={selectedUser}
            onClose={hideEditModal}
            onEditUser={onEditUser}
          />
        )}
        <Button className="w-40" onClick={showCreateModal}>Create new user</Button>
        {renderTable()}
      </div>
    </div>
  );
};
