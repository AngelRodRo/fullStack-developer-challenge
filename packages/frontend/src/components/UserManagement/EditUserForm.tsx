import { Input } from '@/components/Input';
import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import { Button } from '@/components/Button';
import { User, UserEditInput } from '@/__generated__/graphql';

type EditUserFormData = {
  name: string;
  lastName: string;
  address: string;
  phone: string;
};

interface EditUserFormProps {
  user: User;
  onEditUser: (id: number, user: UserEditInput) => void;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onEditUser,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EditUserFormData>({
    defaultValues: {
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address,
    },
  });

  const onSubmit = useCallback(
    async (formData: EditUserFormData) => {
      if (user.id) {
        onEditUser(user.id, formData);
      }
    },
    [onEditUser, user.id],
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          data-testid="input-name"
          label="Name"
          {...register('name', { required: true })}
        />
        <Input
          data-testid="input-lastname"
          label="LastName"
          {...register('lastName', { required: true })}
        />
        <Input
          data-testid="input-address"
          label="Address"
          {...register('address', { required: true })}
        />
        <Input
          data-testid="input-phone"
          label="Phone"
          {...register('phone', { required: true })}
        />

        <Button type="submit">Edit</Button>
      </form>
    </div>
  );
};
