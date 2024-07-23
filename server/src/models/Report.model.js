const mongoose=require("mongoose")

/**
 * This is to save the current condition of the farm 
 * It has all the factors which affect the soil fertility
 */
const ReportSchema=new mongoose.Schema({
    crop:{
        type:String,
        required:true,
    },
    n:{
        type:String,
        required:true,
    },
    p:{
        type:String,
        required:true,
    },
    k:{
        type:String,
        required:true,
    },
    atm:{
        type:String,
        required:true,
    },
    humidity:{
        type:String,
        required:true,
    },
    ph:{
        type:String,
        required:true,
    },
    texture:{
        type:String,
        required:true,
    },
    depth:{
        type:String,
        required:true,
    },
    climate:{
        type:String,
        required:true,
    },
    farmId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Farm'
    }
})

const Report=mongoose.model('Report',ReportSchema)

module.exports=Report
