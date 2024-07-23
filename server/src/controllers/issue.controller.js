const asyncHandler=require("../utils/asyncHandler")
const ApiError=require("../utils/ApiError")
const ApiResponse=require("../utils/ApiResponse")
const Issues=require("../models/Issues.model")
const uploadToCloudinary=require("../utils/cloudinary")

/***
 * Issues are the challenges farmers has come acrossed and they can post it using the platform
 * The issues may also include photos for better understanding and makes ease to diagnose
*/
const addIssue=asyncHandler(async(req,res)=>{
    const{
        challenges
    }=req.body;
 
    if(challenges===undefined || challenges.trim()==="")
        throw new ApiError(415,"No required field should be empty")

    let imagesUrl=[];
    if (req.files?.images && Array.isArray(req.files.images)) {
        const uploadPromises = req.files.images.map(async(element) => await uploadToCloudinary(element.path));

        imagesUrl = await Promise.all(uploadPromises);
        imagesUrl = imagesUrl.map(response => response?.url);
    }
    const issue=await Issues.create({challenges,images:imagesUrl,ownedBy:req.params?.farmId,userId:req.user?._id})
    return res.send(new ApiResponse(200,issue,"Issue noted successfully"))

})

const fetchAllIssues=asyncHandler(async(req,res)=>{
    const issues=await Issues.find({})
    .populate({path:'userId',select:"email firstName lastName avatar "})
    .populate({path:'ownedBy',select:"region"});
    return res.status(200).send(new ApiResponse(200,issues,"Issues fetched successfully"));
})

const fetchIssueById=asyncHandler(async(req,res)=>{
    const issueId=req.params?.issueId;
    if(!issueId){
        throw new ApiError(404,"Error occurred in fetching the issue");
    }

    const issue=await Issues.findOne({_id:issueId})
    .populate({path:'userId',select:"email firstName lastName avatar "})
    .populate({path:'ownedBy',select:"region"});
    return res.status(200).send(new ApiResponse(200,issue,"Issues fetched successfully"));
})

module.exports={
    addIssue,
    fetchAllIssues,
    fetchIssueById
}