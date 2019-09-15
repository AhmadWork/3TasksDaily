const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer } = require( 'apollo-server-express');
const {AuthDirective} = require('./graphql/auth');
const { MONGODB } = require('./config.js');
const app = express();

const typeDefs =require('./graphql/typeDefs');

const resolvers = require('./graphql/resolvers')
const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
},
context:(req)=>(req)
});

server.applyMiddleware({ app, path: '/graphql' });

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
app.listen({ port: 5000 }, () => {
    console.log('Apollo Server on http://localhost:5000/graphql');
  })})
