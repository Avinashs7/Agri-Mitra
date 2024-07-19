const mongoose=require("mongoose")

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
    
})

const Report=mongoose.model('Report',ReportSchema)

module.exports=Report
