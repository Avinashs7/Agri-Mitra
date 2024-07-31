const ApiError = require("../utils/ApiError.js");
const ApiResponse = require("../utils/ApiResponse.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Prediction=require("../models/Prediction.model.js")
const axios=require("axios")


const benefits="The predicted crop benefits both the farmer to increase the yield and also retain the fertility of the soil";

const storePrediction=async(data,id)=>{
    const existingPrediction=await Prediction.findOneAndUpdate({reportId:id},{crop:data?.prediction});
    if(!existingPrediction){
        const predictedValue=await Prediction.create({crop:data?.prediction,benefits:benefits,reportId:id});
        if(!predictedValue){
            throw new ApiError(404,"Error while storing the prediction value");
        }
        return predictedValue;
    }
    return existingPrediction;
}

const predictCrop=asyncHandler(async(req,res)=>{
    const id=req.params?.farmId;
    const{
        N,
        P,
        K,
        temperature,
        humidity,
        ph,
        rainfall
    }=req.body;
    // console.log({N,P,K,temperature,humidity,ph,rainfall});
    // console.log(req.body);
    if([N,P,K,temperature,humidity,ph,rainfall].some((fields)=>{
        if(fields===undefined)
            throw new ApiError(406,"All fields are required to predict a crop");
    }));

    await axios.post("http://127.0.0.1:8001/predict",{N,P,K,temperature,humidity,ph,rainfall})
    .then((response)=>{
        async function storeAndRespond(){
            const prediction=await storePrediction(response?.data,id)
            // console.log(prediction)
            if(prediction)
                res.status(200).send(new ApiResponse(200,prediction,"responded from flask server"));
        }
        storeAndRespond();
    })
    .catch((err)=>{
        console.error(err);
        throw new ApiError(404,"error occured while predicting");
    })
})

const getPredictedCrop=asyncHandler(async(req,res)=>{
    const reportId=req.params?.reportId;
    const predictedCrop=await Prediction.findOne({reportId:reportId});
    if(!predictedCrop){
        throw new ApiError(404,"No prediction done");
    }
    return res.status(200).send(new ApiResponse(200,predictedCrop,"Predicted crop for the farm"));
})

module.exports={predictCrop,getPredictedCrop}