import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query getSingleUser {
    user {
      username
      email
      savedBooks
    }
  }
`;
