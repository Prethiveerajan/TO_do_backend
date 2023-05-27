const express =require('express')

const router = express.Router();
const {getAllToDoItems} = require('../controllers/todo_items')

router.route('/').get(getAllToDoItems)
// router.get('/',(request,response)=>
// {
//     // response.send('list o fall to-do list');
//     response.end()

// })
module.exports =router;