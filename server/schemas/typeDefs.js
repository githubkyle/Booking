const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: ID!
    email: String!
    password: String!

  }

  type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    getSingleUser: User
      }

  type Mutation {
    createUser(username: ID!, email:String!, password:String!): User
    saveBook(username: ID!,bookId: String!)
    deleteBook(username: ID!,bookId: String!)
    login(username: ID!,password: String!)
    
  }
`;

module.exports = typeDefs;
