const mongoose=require("mongoose")

const PredictionSchema=new mongoose.Schema("Prediction",{
    crop:{
        type:String,
        required:true,
    },
    benefits:{
        type:String,
        required:true
    },
    ownedBy:{
        type:mongoose.Types.ObjectId,
        ref:'Report'
    }
})

const Prediction=mongoose.model('Prediction',PredictionSchema)

module.exports=Prediction
