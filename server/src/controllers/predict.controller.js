const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const Prediction=require("../models/Prediction.model")
const axios=require("axios")


const benefits="The predicted crop benefits both the farmer to increase the yield and also retain the fertility of the soil";

const storePrediction=async(data,id)=>{
    const predictedValue=await Prediction.create({crop:data?.prediction,benefits:benefits,reportId:id});
    if(!predictedValue){
        throw new ApiError(404,"Error while storing the prediction value");
    }
    return true;
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
    // console.log(id);
    if([N,P,K,temperature,humidity,ph,rainfall].some((fields)=>{
        if(fields.trim()==="")
            throw new ApiError(406,"All fields are required to predict a crop");
    }));

    await axios.post("http://127.0.0.1:8001/predict",{N,P,K,temperature,humidity,ph,rainfall})
    .then((response)=>{
        const success=storePrediction(response?.data,id);
        if(success)
            res.status(200).send(new ApiResponse(200,response?.data,"responded from flask server"));
    })
    .catch((err)=>{
        console.error(err);
        throw new ApiError(404,"error occured while predicting");
    })
})

module.exports={predictCrop}