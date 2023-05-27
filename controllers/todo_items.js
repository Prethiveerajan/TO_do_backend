const { response } = require("express")

const getAllToDoItems = (request,response)=>{
    response.send('list of all to -do items ')

}
const createNewToDoItems = (request,response)=>{
    // response.send('list of all to -do items ')
    response.json(`${request.body}`)

}
const getAToDoItem = (request,response) =>{
    response.send(`disaplayig items with id${request.params.id}`)

}
const updateAToDoItems = (request,response)=>{
    response.send(`updating item with id${request.params.id}`)
}
const deleteAToDoItem = (request,response)=>{
    response.send(`deleting item wiht id ${request.params.id}`)
}
module.exports =  {getAllToDoItems,createNewToDoItems,getAToDoItem,updateAToDoItems,deleteAToDoItem}

