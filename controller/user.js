const Model = require('../models/user');

class Todo {
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
    let addUser = {
      username : req.body.username,
      password : req.body.password,
      role     : req.body.role || 'user'
    }
    Model.create(addUser,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your user was created`,rows:rows})
      }
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

module.exports = Todo;
