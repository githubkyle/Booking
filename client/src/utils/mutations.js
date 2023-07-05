import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: Password!, $savedBooks: [bookSchema]) {
    createUser(username: $username, email: $email,password: $password,$savedBooks:[bookSchema]) {
      username
      email
      password
      savedBooks
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($username: String!, $title: String!) {
    saveBook(username: $username, title: $title) {
      username
      title
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      bookId
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      password
    }
  }
`;
