const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError,AuthenticationError } = require('apollo-server');
const Task = require('../../models/Task')
const checkAuth = require('../../util/checkAuth')

const {
  } = require('../../util/validators');

  module.exports = {
Query: {
    async tasks (_,args, context){
        const user =await checkAuth(context)
  
            try {
                let tasks=await Task.find({user:user.id})
                return tasks
            } catch (error) {
                throw new Error(error)
            }


        
    },
    async task(_,{taskId},context){
        const user =await checkAuth(context)

        try {
            let task=await Task.findById(taskId)
            if(task.user==user.id)
            return task
            else throw new AuthenticationError('You Are Not Authraized')
        } catch (error) {
            throw new Error(error)
        }
    }
},

Mutation: {
    async createTask(_,{
        taskInput:{name,desc,duration,priority,steps}
         } , context) {
        
        const user =await checkAuth(context)
        
        if (name.trim() === '') {
            throw new Error('name must not be empty');
          }
          try {
            const newTask = new Task({
                name,
                desc,
                duration,
                priority,
                steps,
                user:user.id,
                createdAt: new Date().toISOString()
              });
              const task = await newTask.save();
        
        
              return task
          } catch (error) {
              throw Error(error)
          }
},
//async updateTask(_,{})
}
  }