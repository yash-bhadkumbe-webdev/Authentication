const express = require('express')
const app = express()
const ConnectDB = require('./config/ConnectDB')

ConnectDB()
app.listen(4000,()=>{
    console.log('server started')
})