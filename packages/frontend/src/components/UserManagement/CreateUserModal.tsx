import { Modal } from '@/components/Modal';
import { CreateUserForm } from '@/components/UserManagement/CreateUserForm';
import React, { useMemo } from 'react';
import {UserCreateInput} from "@/__generated__/graphql";

interface Props {
  onCreateUser: (data: UserCreateInput) => void;
  onClose: () => void;
}

export const CreateUserModal: React.FC<Props> = ({ onClose, onCreateUser }) => {
  const renderedHeader = useMemo(
    () => <h1 className="text-2xl">Create a new user</h1>,
    [],
  );
  return (
    <Modal header={renderedHeader} onClose={onClose}>
      <CreateUserForm onCreateUser={onCreateUser} />
    </Modal>
  );
};
