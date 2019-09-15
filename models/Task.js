const { model, Schema } = require('mongoose');

const TaskSchema = new Schema({
  name: String,
  desc: String,
  duration:String,
  priority: Number,
  createdAt: String,
  steps: [{
    id : Number,
    name : String,
    desc:String
          }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Task', TaskSchema);
