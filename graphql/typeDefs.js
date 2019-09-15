const { gql } = require('apollo-server');

module.exports = gql`
  directive @auth on FIELD_DEFINITION

  type User {
    id: ID!
    token: String!
    email:String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    hello: String
  }
  
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    

  }
`;