/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n    mutation login($userInput: UserCredentials!) {\n        login(userCredentials: $userInput) {\n            user {\n                id\n                email\n            }\n            token\n        }\n    }\n':
    types.LoginDocument,
  '\n  mutation CreateUser($userInput: UserCreateInput!) {\n    createUser(userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n':
    types.CreateUserDocument,
  '\n  mutation EditUser($id: Int!, $userInput: UserEditInput!) {\n    editUser(id: $id, userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n':
    types.EditUserDocument,
  '\n  mutation RemoveUser($id: Int!) {\n    removeUser(id: $id)\n  }\n':
    types.RemoveUserDocument,
  '\n  query GET_USERS($take: Int!, $skip: Int!) {\n    users(take: $take, skip: $skip) {\n      items {\n        id\n        name\n        lastName\n        address\n        email\n        phone\n      }\n      total\n    }\n  }\n':
    types.Get_UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    mutation login($userInput: UserCredentials!) {\n        login(userCredentials: $userInput) {\n            user {\n                id\n                email\n            }\n            token\n        }\n    }\n',
): (typeof documents)['\n    mutation login($userInput: UserCredentials!) {\n        login(userCredentials: $userInput) {\n            user {\n                id\n                email\n            }\n            token\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation CreateUser($userInput: UserCreateInput!) {\n    createUser(userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n',
): (typeof documents)['\n  mutation CreateUser($userInput: UserCreateInput!) {\n    createUser(userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation EditUser($id: Int!, $userInput: UserEditInput!) {\n    editUser(id: $id, userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n',
): (typeof documents)['\n  mutation EditUser($id: Int!, $userInput: UserEditInput!) {\n    editUser(id: $id, userInput: $userInput) {\n      email\n      name\n      lastName\n      address\n      phone\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation RemoveUser($id: Int!) {\n    removeUser(id: $id)\n  }\n',
): (typeof documents)['\n  mutation RemoveUser($id: Int!) {\n    removeUser(id: $id)\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GET_USERS($take: Int!, $skip: Int!) {\n    users(take: $take, skip: $skip) {\n      items {\n        id\n        name\n        lastName\n        address\n        email\n        phone\n      }\n      total\n    }\n  }\n',
): (typeof documents)['\n  query GET_USERS($take: Int!, $skip: Int!) {\n    users(take: $take, skip: $skip) {\n      items {\n        id\n        name\n        lastName\n        address\n        email\n        phone\n      }\n      total\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
