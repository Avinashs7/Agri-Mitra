const mongoose=require("mongoose")

/**
 * The model is used to store the prediction the crop and the it's advantages 
 */
const PredictionSchema=new mongoose.Schema({
    crop:{
        type:String,
        required:true,
    },
    benefits:{
        type:String,
        required:true
    },
    reportId:{
        type:mongoose.Types.ObjectId,
        ref:'Report'
    }
})

const Prediction=mongoose.model('Prediction',PredictionSchema)

module.exports=Prediction
