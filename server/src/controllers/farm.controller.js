const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const Farm=require("../models/Farm.model")

/**
 * Store a farmland details 
 * This is referenced from the report which contains all the factor which affects soil fertility
 */
const addFarm=asyncHandler(async(req,res)=>{
    const{
        area,
        unit,
        region
    }=req.body;

    //Empty validation
    if([area,unit,region].some(field=>{
        if(field.trim()==="")
            throw new ApiError(402,"All fields are required");
    }));

    //Creation of the farmland if it is sold to another person
    const farm=await Farm.create({area,unit,region,ownedBy:req.user?._id});
    return res.status(200).send(new ApiResponse(200,farm,"Farm added successfully"));
})

const getFarms=asyncHandler(async(req,res)=>{
    //Fetch the farms owned by the user i.e farmer
    //id is required to link the farm with the user
    //Every user can have multiple farms but vice versa doen't hold true
    const id=req.user?._id;

    //If no id is there then the user is not present 
    if(!id){
        throw ApiError(405,"There is no valid User")
    }

    //creation of farms when it doesn't have one
    const farms=await Farm.find({ownedBy:id});
    // console.log(farms)
    return res.status(200).send(new ApiResponse(200,farms,"The farm details of the user"));
})

module.exports={addFarm,getFarms}