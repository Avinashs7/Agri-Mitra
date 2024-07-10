const mongoose=require("mongoose")

const farmSchema=new mongoose.Schema("farm",{
    area:{
        type:Number,
        required:true,
    },
    unit:{
        type:String,
        enum:['acre','sqkm'],
    }
})