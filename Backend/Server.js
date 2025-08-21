import express from 'express'
import ConnectDB from "./config/ConnectDB.js";
import Route from "./Routes/Route.js";
const app = express()


ConnectDB()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/user',Route)

app.listen(5000,()=>{
    console.log("server started")
})