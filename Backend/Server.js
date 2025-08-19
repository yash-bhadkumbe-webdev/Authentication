const express = require('express')
const app = express()
const ConnectDB = require('./config/ConnectDB')
const userRoute = require('./Routes/Route')
ConnectDB()
app.use(express.json())

app.use('/user',userRoute)


app.listen(4000,()=>{
    console.log('server started')
})