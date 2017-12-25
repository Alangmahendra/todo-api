const mongoose = require('mongoose');

const Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

let userSchema = new Schema({
    username     : String,
    password     : String,
    role         : String,
    todoList     : [{type:Schema.Types.ObjectId,ref:'TaskModel'}]
},{timestamps:{}});

let UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
