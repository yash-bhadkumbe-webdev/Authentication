const bcrypt = require('bcrypt')
const userSchema = require('../Model/Model')
 const registerUser =async (req,res)=>{

    try {
        const {username,email,password}=req.body;
        if (!username ||!email||!password){
            return res.status(400).json({
                success:false,
                message:'all fields are required'
            })
        }
        const existingUser = await userSchema.findOne({email})
        if (existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exists"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser = await userSchema.create({
            username,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            success:true,
            message:"user created",
            data:newUser
        })
    }catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
module.exports={registerUser}