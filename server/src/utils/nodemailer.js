const nodemailer=require("nodemailer")
const User = require("../models/User.model.js");
const ApiError = require("./ApiError.js");
const Otp=require("../models/Otp.model.js")

/**
 * Nodemailer transporter is to config the mail carrier  
 * This is used to send the mail
 */
const tranporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD,
    }
})   

/**
 * The method to send the otp in mail for email verification
 */
const sendValidationMail=async(userId,otp)=>{
    const user =await User.findById(userId).select("_id email");
    const mailOptions={
        from:process.env.EMAIL,
        to:user.email,
        subject: "Email Verification for WeConnect",
        text: `Your OTP for email verification is ${otp}. It will expire in 5 minutes.`
    }
    try {
        tranporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.error(error);
                return false;
            }
        })
        const savedOtp=await Otp.create({otp,userId:user._id});
        if(!savedOtp)
            throw new ApiError(403,"Error occured while storing the OTP");
        return true;
    } catch (error) {
        console.error(error);
        throw new ApiError(406,"Error occured while sending OTP");
    }
}

module.exports={sendValidationMail}