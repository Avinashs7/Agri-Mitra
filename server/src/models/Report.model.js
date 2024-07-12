const mongoose=require("mongoose")

const ReportSchema=new mongoose.Schema("report",{
    crop:{
        type:String,
        required:true,
    },
    N:{
        type:String,
        required:true,
    },
    P:{
        type:String,
        required:true,
    },
    K:{
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
})

const Report=mongoose.model('Report',ReportSchema)

module.exports=Report
