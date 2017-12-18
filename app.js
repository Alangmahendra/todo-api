const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoDB',{useMongoClient:true});

const Todo = require('./router/todo');
const User = require('./router/user');

app.use('/api/todos',Todo)
app.use('/api/users',User)

app.listen(3000,()=>{
  console.log('masuk');
})
