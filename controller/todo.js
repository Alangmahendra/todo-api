const Model = require('../models/todo');

class Todo {
  static findAll(req,res){
    Model.find({},(err,rows)=>{
      if(err){
        res.json({message:`err`})
      } else {
        res.json({message:`this is your todoList`,rows:rows})
      }
    })
  }

  static crate(req,res){
    let addList = new Model(req.body)
    addList.save((err,rows)=>{
      if(err){
        res.json({message:err})
      }else {
        res.json({message:`your list was created`,rows:rows})
      }
    })
  }

  static remove(req,res){
    Model.findByIdAndRemove(req.params.id,(err,rows)=>{
      if(err){
        res.json({message:err})
      }else{
        res.json({message:`your list with id : ${req.param.id} has been deleted`,rows:rows})
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
}

module.exports = Todo;
