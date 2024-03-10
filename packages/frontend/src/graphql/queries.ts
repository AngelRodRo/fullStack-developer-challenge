import { graphql } from '@/__generated__';

export const GET_USERS = graphql(/* GraphQL */ `
  query GET_USERS($take: Int!, $skip: Int!) {
    users(take: $take, skip: $skip) {
      items {
        id
        name
        lastName
        address
        email
        phone
      }
      total
    }
  }
`);
