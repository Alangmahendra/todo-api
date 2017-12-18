const mongoose = require('mongoose');

const Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

let taskSchema = new Schema({
    title     : String,
    completed : Boolean,
},{timestamps:{}});

let TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;
