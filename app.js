const express=require('express')//function
const app= express()//module
app.use(express.json())
const apiRouter=require('./routers/api')
const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mr11secondapi',()=>{
    console.log( "connect to db mr11secondapi")
})

app.use('/api',apiRouter)
app.listen(5000,()=>{
    console.log("server is runing on port 5000")
})