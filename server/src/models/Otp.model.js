const mongoose=require("mongoose")

/**
 * The model is to hold the otp of a user just for given duration 
 * the deletion of document is handled by mongoose 
 * For additional safety node cron is used in background to delete the expired otp document
 */
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