const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const Report=require("../models/Report.model");
const ApiResponse = require("../utils/ApiResponse");

const addReport=asyncHandler(async(req,res)=>{
    const {
        crop,
        n,
        p,
        k,
        atm,
        humidity,
        ph,
        texture,
        depth,
        climate,
    }=req.body;
    farmId=req.params?.farmId;
    if([crop,n,p,k,atm,humidity,ph,texture,depth,climate].some(field=>{
        if(field.trim()==="")
            throw new ApiError(402,"Please fill all required fields");
    }));
    const report = await Report.create({crop,
        n,
        p,
        k,
        atm,
        humidity,
        ph,
        texture,
        depth,
        climate,
        farmId
    });
    return res.status(200).send(new ApiResponse(200,"Report added successfully"));
})

module.exports={addReport}