const mongoose=require("mongoose")

/**
 * This is to save the current condition of the farm 
 * It has all the factors which affect the soil fertility
 */
const ReportSchema=new mongoose.Schema({
    N:{
        type:Number,
        required:true,
    },
    P:{
        type:Number,
        required:true,
    },
    K:{
        type:Number,
        required:true,
    },
    temperature:{
        type:Number,
        required:true,
    },
    humidity:{
        type:Number,
        required:true,
    },
    ph:{
        type:Number,
        required:true,
    },
    rainfall:{
        type:Number,
        required:true,
    },
    farmId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Farm'
    }
})

const Report=mongoose.model('Report',ReportSchema)

module.exports=Report
