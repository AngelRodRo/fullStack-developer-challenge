import { Input } from '@/components/Input';
import { useForm } from 'react-hook-form';
import React, { useCallback } from 'react';
import { Button } from '@/components/Button';
import {UserCreateInput} from "@/__generated__/graphql";

type CreateUserFormData = {
  name: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  password: string;
};

interface CreateUserFormProps {
  onCreateUser: (user: UserCreateInput) => void
}

export const CreateUserForm: React.FC<CreateUserFormProps> = ({ onCreateUser }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateUserFormData>();

  const onSubmit = useCallback(
    async (formData: CreateUserFormData) => {
      onCreateUser(formData)
    },
    [onCreateUser],
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input data-testid="input-name" label="Name" {...register('name', { required: true })} />
        <Input data-testid="input-lastname" label="LastName" {...register('lastName', { required: true })} />
        <Input data-testid="input-address" label="Address" {...register('address', { required: true })} />
        <Input data-testid="input-phone" label="Phone" {...register('phone', { required: true })} />
        <Input data-testid="input-email" label="Email" type="email" {...register('email', { required: true })} />
        <Input
          data-testid="input-password"
          label="Password"
          type="password"
          {...register('password', { required: true })}
        />

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
