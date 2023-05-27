const express =require('express')
const app =express()
const router = express.Router();

app.get('/',(request,response)=>
{
    response.send('list o fall to-do list');

})
module.exports =app;