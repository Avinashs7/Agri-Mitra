const mongoose=require("mongoose")

const OtpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true,
});

const Otp=mongoose.model("Otp",OtpSchema);

module.exports=Otp;