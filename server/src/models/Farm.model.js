const mongoose=require("mongoose")

const farmSchema=new mongoose.Schema("farm",{
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
    condition:{
        type:mongoose.Types.ObjectId,
        ref:'Report'
    }
})

const Farm=mongoose.model('Farm',farmSchema)

module.exports=Farm