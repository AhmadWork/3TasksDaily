const usersResolvers = require('./users')

 function hello ()  {
    return 'Hello world!';
  };


module.exports={

  Query:{
    hello
  },
  Mutation:{
    ...usersResolvers.Mutation
  }
}