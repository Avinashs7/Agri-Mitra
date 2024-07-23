const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const Farm=require("../models/Farm.model")

const addFarm=asyncHandler(async(req,res)=>{
    const{
        area,
        unit,
        region
    }=req.body;
    if([area,unit,region].some(field=>{
        if(field.trim()==="")
            throw new ApiError(402,"All fields are required");
    }));
    const farm=await Farm.create({area,unit,region,ownedBy:req.user?._id});
    return res.status(200).send(new ApiResponse(200,farm,"Farm added successfully"));
})

const getFarms=asyncHandler(async(req,res)=>{
    const id=req.user?._id;
    if(!id){
        throw ApiError(405,"There is no valid User")
    }
    const farms=await Farm.find({ownedBy:id});
    // console.log(farms)
    return res.status(200).send(new ApiResponse(200,farms,"The farm details of the user"));
})

module.exports={addFarm,getFarms}