const Model = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
require('dotenv').config()


class User {
  static signUp(req,res){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
         let obj = {
           username : req.body.username,
           password : hash,
           role     : req.body.role || 'user'
         } 
         Model.create(obj,(err,rows)=>{
           if(err){
             res.json({message:err})
           } else{
             res.json({message:'user has been created',data:rows})
           }
         })
      })
   })
  }

  static signIn(req,res){
    let username = req.body.username
    Model.findOne({username:username},(err,user)=>{
      if(err){
        res.json({message:`username tak ada`,err:err})
      }else{
        console.log(user)
        console.log('============',user.password)
        bcrypt.compare(req.body.password, user.password, function(err,data){
          if(!err){
            console.log('-------------',user)
            jwt.sign({
              _id       : user._id,
              username : user.username,
              password : user.password,
              role     : user.role,
              todoList : user.todoList
            },process.env.SECRET_KEY,function(err,token){
              if(err){
                res.json({message:err})
              } else{
                res.json({token:token})
              }
            })
          }else{
            res.json({message:err})
          }
        })
      }
    })
  }

  static findAll(req,res){
    Model.find({},(err,rows)=>{
      if(err){
        res.json({message:`err`})
      } else {
        res.json({message:`this is your user list`,rows:rows})
      }
    })
  }

  static crate(req,res){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
         let obj = {
           username : req.body.username,
           password : hash,
           role     : req.body.role || 'user'
         } 
         Model.create(obj,(err,rows)=>{
           if(err){
             res.json({message:err})
           } else{
             res.json({message:'user has been created',data:rows})
           }
         })
      })
   })
  }

  static remove(req,res){
    Model.findByIdAndRemove(req.params.id,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else{
        res.json({message:`your user with id : ${req.param.id} has been deleted`,rows:rows})
      }
    })
  }

  static update(req,res){
    let obj = req.body
    Model.findByIdAndUpdate(req.params.id,obj,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your data in id : ${req.params.id} has been updated`,rows:rows})
      }
    })
  }

  static findOne(req,res){
    Model.findById(req.params.id,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else{
        res.json({message:'this is your data',rows:rows})
      }
    })
  }
}

module.exports = User;
