import { gql } from 'graphql-tag';

export default gql`
  type User {
    email: String
    name: String
    lastName: String
    address: String
    phone: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    user: [User]
  }
`;
