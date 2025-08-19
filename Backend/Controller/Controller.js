const User = require('../Model/Model')
export const registerUser =async (req,res)=>{
    try {
        const {username,email,password}=req.body;
        if (!username ||!email||password){
            return res.status(400).json({
                success:false,
                message:'all fields are required'
            })
        }
        const existingUser = await User.findOne((email))
    }catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}