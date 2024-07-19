const mongoose=require("mongoose")

const farmSchema=new mongoose.Schema({
    area:{
        type:Number,
        required:true,
    },
    unit:{
        type:String,
        enum:['acre','sqkm'],
    },
    region:{
        type:String,
        required:true,
    },
    report:{
        type:mongoose.Types.ObjectId,
        ref:'Report'
    }
})

const Farm=mongoose.model('Farm',farmSchema)

module.exports=Farm