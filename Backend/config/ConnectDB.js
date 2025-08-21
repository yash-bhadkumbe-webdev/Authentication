import mongoose from "mongoose"
const ConnectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Auth')
        console.log('Data base connected Sucessfully')
    }catch (e) {
        console.log('connection failed')
    }
}
export default ConnectDB;