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
    const farm=await Farm.create({area,unit,region});
    return res.status(200).send(new ApiResponse(200,null,"Farm added successfully"));
})

module.exports={addFarm}