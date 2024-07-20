const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const uploadToCloudinary=require("../utils/cloudinary")
const Solution=require("../models/Solutions.model");
const ApiResponse = require("../utils/ApiResponse");

const addSolution=asyncHandler(async(req,res)=>{
    const{
        answer
    }=req.body;
    
    if(answer===undefined||answer==="")
        throw new ApiError(402,"Fields are required");

    let imagesUrl=[];
    if (req.files?.images && Array.isArray(req.files.images)) {
        const uploadPromises = req.files.images.map(async(element) => await uploadToCloudinary(element.path));

        imagesUrl = await Promise.all(uploadPromises);
        imagesUrl = imagesUrl.map(response => response?.url);
    }
    const soultion=await Solution.create({answer,images:imagesUrl,advisedBy:req.user?._id})
    return res.status(200).send(ApiResponse(200,null,"Solution added successfully"));
})

const addUpvote=asyncHandler(async(req,res)=>{
    const solutionId=req.params?.id;
    if(!solutionId)
        throw new ApiError(403,"Something went wrong while upvoting the solution");
    const solution=await Solution.findById(solutionId);
    if(!solution)
        throw new ApiError(403,"Invalid solution access");
    if(!solution.upvote.includes(req.user._id))
    solution.upvote.push(req.user._id);
    return res.status(200).send(new ApiResponse(200,null,"Liked"));
})

module.exports={addSolution,addUpvote}