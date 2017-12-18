const express = require('express');
const router = express.Router()

const Todo = require('../controller/todo');

router.get('/',Todo.findAll)
router.post('/',Todo.crate)
router.delete('/:id',Todo.remove)
router.put('/:id',Todo.update)

module.exports = router;
