const nodemailer = require('nodemailer')
const verifyEmail = async (token,email)=>{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"yash.bhadkumbe.sde@gmail.com",
            pass:"bqjryoiflwqjylzg"
        }
    })
    const mailConfiguration={
        from:"yash.bhadkumbe.sde@gmail.com",
        to:email,
        subject:"Email verification",
        html:"just testing"
    }
    transporter.sendMail(mailConfiguration,function (error,info){
        if (error){
            throw new Error(error)
        }
        console.log("email sent OK")
        console.log(info)
    })
}