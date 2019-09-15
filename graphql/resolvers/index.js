const usersResolvers = require('./users')
const taksResolvers = require('./tasks')
 function hello ()  {
    return 'Hello world!';
  };


module.exports={

  Query:{
    ...usersResolvers.Query,
    ...taksResolvers.Query
  },
  Mutation:{
    ...usersResolvers.Mutation,
    ...taksResolvers.Mutation
  }
}