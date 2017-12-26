const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
var cors = require('cors')
const jwt = require('jsonwebtoken')


require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoDB',{useMongoClient:true});

const Todo = require('./router/todo');
const User = require('./router/user');
const Sign = require('./router/sign');
app.use('/api/',Sign)
app.use('/api/todos',Todo)
app.use('/api/users',User)

app.listen(3000,()=>{
  console.log('masuk');
})
