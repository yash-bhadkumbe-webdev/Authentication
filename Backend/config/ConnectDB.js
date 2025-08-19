const mongoose = require('mongoose')
const ConnectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Auth')
        console.log('Data base connected Sucessfully')
    }catch (e) {
        console.log('connection failed')
    }
}
module.exports=ConnectDB;