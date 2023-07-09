import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query getSingleUser($username: username!) {
    user(username: $username) {
      username
      email
      savedBooks
    }
  }
`;
