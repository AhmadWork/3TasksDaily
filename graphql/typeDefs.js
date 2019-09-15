const { gql } = require('apollo-server');

module.exports = gql`
  directive @auth on FIELD_DEFINITION

  type User {
    id: ID!
    token: String!
    email:String!
    username: String!
    createdAt: String!
    Tasks:[Task]!
  }
  type Task{
  id:ID!
  name:String!
  desc:String
  duration:String!
  steps:[Step]
  priority:Int!
  createdAt: String,
  }
  type Step {
    id:ID!
    name:String!
    desc:String

  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    
  }
  input TaskInput {
    name:String!
    desc:String
    duration:String!
    priority:Int!
    steps:[stepsInput]
  }
input stepsInput{
  id:Int!
  name:String!
  desc:String
}
  type Query {
    users: [User] @auth
    tasks:[Task] @auth
    task(taskId:ID!):Task @auth
  }
  
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createTask(taskInput:TaskInput):Task

  }
`;