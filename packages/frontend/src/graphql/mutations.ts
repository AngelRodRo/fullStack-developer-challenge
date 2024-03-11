import { graphql } from '@/__generated__';

export const LOGIN = graphql(`
  mutation login($userInput: UserCredentials!) {
    login(userCredentials: $userInput) {
      user {
        id
        email
      }
      token
    }
  }
`);

export const CREATE_USER = graphql(`
  mutation CreateUser($userInput: UserCreateInput!) {
    createUser(userInput: $userInput) {
      email
      name
      lastName
      address
      phone
    }
  }
`);

export const EDIT_USER = graphql(`
  mutation EditUser($id: Int!, $userInput: UserEditInput!) {
    editUser(id: $id, userInput: $userInput) {
      email
      name
      lastName
      address
      phone
    }
  }
`);

export const REMOVE_USER = graphql(`
  mutation RemoveUser($id: Int!) {
    removeUser(id: $id)
  }
`);
