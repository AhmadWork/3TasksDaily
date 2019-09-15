const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config')
const{AuthenticationError} = require('apollo-server')
module.exports=(context)=> {
    const authHeader=context.req.headers.authrization;
    if(authHeader){
        const token=authHeader.split('Bearer ')[1];
        if(token){
            try {
                const user = jwt.verify(token,SECRET_KEY)
                return user
            } catch (error) {
                throw new AuthenticationError('invaild/Expired token')
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]')
    }
    throw new Error('authrization header must be provided')

}