import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import {CREATE_USER, EDIT_USER, REMOVE_USER} from '@/graphql/mutations';
import {UserCreateInput, UserEditInput} from "@/__generated__/graphql";

interface UserActionOptions {
  refetch: () => void;
}
export const useUserActions = ({ refetch }: UserActionOptions) => {
  const [removeUser] = useMutation(REMOVE_USER);
  const [editUser] = useMutation(EDIT_USER);
  const [createUser] = useMutation(CREATE_USER);

  const handleCreateUser = useCallback(async (userData: UserCreateInput) =>{
    try {
      const { data } = await createUser({
        variables: {
          userInput: userData,
        },
      });
      console.log('Created user:', data?.createUser);
      refetch();
    } catch (e) {
      console.error('Error creating user:', e);
    }
  }, [createUser]);

  const handleEditUser = useCallback(async (id: number, userData: UserEditInput) => {
    try {
      const { data } = await editUser({
        variables: {
          id,
          userInput: userData
        }
      });
      console.log('Edited user:', data?.editUser);
      refetch();
    } catch (error) {
      console.error('Error editing user:', error);
    }
  }, [editUser, refetch]) ;

  const handleRemove = useCallback(
    async (id: number) => {
      try {
        await removeUser({
          variables: { id },
        });
        refetch();
        console.log('User removed successfully');
      } catch (error) {
        console.error('Error removing user:', error);
      }
    },
    [refetch, removeUser],
  );

  return { handleCreateUser, handleEditUser, handleRemove };
};
