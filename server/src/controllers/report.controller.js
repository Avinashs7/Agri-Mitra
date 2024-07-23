const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const Report=require("../models/Report.model");
const ApiResponse = require("../utils/ApiResponse");

const addReport=asyncHandler(async(req,res)=>{
    const {
        N,
        P,
        K,
        temperature,
        humidity,
        ph,
        rainfall
    }=req.body;
    farmId=req.params?.farmId;
    if([N,P,K,temperature,humidity,ph,rainfall].some(field=>{
        if(field.trim()==="")
            throw new ApiError(402,"Please fill all required fields");
    }));
    const report = await Report.create({
        N,
        P,
        K,
        temperature,
        humidity,
        ph,
        rainfall,
        farmId
    });
    return res.status(200).send(new ApiResponse(200,report,"Report added successfully"));
})

const getReport=asyncHandler(async(req,res)=>{
    const farmId=req.params?.farmId;
    const report=await Report.findOne({farmId:farmId});
    if(!report){
        return res.status(200).send(new ApiResponse(404,null,"No farm details found"));
    }
    return res.status(200).send(new ApiResponse(200,report,"Farm details fetched"));
})

module.exports={addReport,
    getReport
}