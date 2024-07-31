const ApiError = require("../utils/ApiError.js");
const asyncHandler = require("../utils/asyncHandler.js");
const Report=require("../models/Report.model.js");
const ApiResponse = require("../utils/ApiResponse.js");

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
    const existingReport=await Report.findOneAndUpdate({farmId:farmId},{N,K,P,temperature,humidity,ph,rainfall});
    if(!existingReport){
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
    }
    else{
        return res.status(200).send(new ApiResponse(200,existingReport,"Report updated successfully"));
    }
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