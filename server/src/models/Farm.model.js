const mongoose=require("mongoose")

/**
 * Model to handle the farm details of the farmer 
 * Generally stores all different farms where all sensors are stored
 * Which is to be farmed smartly
 */
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
    ownedBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Farm=mongoose.model('Farm',farmSchema)

module.exports=Farm