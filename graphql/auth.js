const { SchemaDirectiveVisitor } =require('apollo-server-express')
const { defaultFieldResolver } =require('graphql')
const checkAuth= require('../util/checkAuth')


class AuthDirective extends SchemaDirectiveVisitor {
  
   visitFieldDefinition (field) {
    const { resolve = defaultFieldResolver } = field

    field.resolve = function (...args) {
      const [, , context] = args


      const user =checkAuth(context);
      if(!user)throw new Error('You are not authenticated!')
      
      return resolve.apply(this, args)
    }
  }
}

module.exports={AuthDirective}

 