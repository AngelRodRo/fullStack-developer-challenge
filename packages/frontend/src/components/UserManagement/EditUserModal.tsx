import { Modal } from '@/components/Modal';
import React, { useMemo } from 'react';
import { User, UserEditInput } from '@/__generated__/graphql';
import { EditUserForm } from '@/components/UserManagement/EditUserForm';

interface Props {
  user: User;
  onEditUser: (id: number, data: UserEditInput) => void;
  onClose: () => void;
}

export const EditUserModal: React.FC<Props> = ({
  onClose,
  onEditUser,
  user,
}) => {
  const renderedHeader = useMemo(
    () => <h1 className="text-2xl">Edit user</h1>,
    [],
  );
  return (
    <Modal header={renderedHeader} onClose={onClose}>
      <EditUserForm onEditUser={onEditUser} user={user} />
    </Modal>
  );
};
