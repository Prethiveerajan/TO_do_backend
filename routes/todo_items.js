const express =require('express')

const router = express.Router();
const {getAllToDoItems,createNewToDoItems,getAToDoItem,updateAToDoItems,deleteAToDoItem} = require('../controllers/todo_items')

router.route('/').get(getAllToDoItems).post(createNewToDoItems)
router.route('/:id').get(getAToDoItem).patch(updateAToDoItems)

module.exports =router;                                                                                              