const mongoose=require("mongoose")

const OtpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:'5m',
    }
});

const Otp=mongoose.model("Otp",OtpSchema);

module.exports=Otp;