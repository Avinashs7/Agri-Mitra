const User =require("../models/User.model.js")
const ApiResponse=require("../utils/ApiResponse.js")
const ApiError=require("../utils/ApiError.js")
const AsyncHandler=require("../utils/asyncHandler.js")
const uploadToCloudinary=require("../utils/cloudinary.js")

const registerUser=AsyncHandler(async (req,res)=>{
    const {
        email,
        firstName,
        lastName,
        password,
        phone,
        gender,
    }=req.body;
    if([email,firstName,lastName,phone,gender].some((field)=>{
        if(field.trim()==="")
            throw new ApiError(400,"All fields are required");
    }));
    
    const existedUser=await User.findOne({
        $or:[{email},{phone}]
    });

    if(existedUser)throw new ApiError(409,"User already exists");

    const avatarLocalPath=req.files?.avatar[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar field is empty");
    }

    const avatar=await uploadToCloudinary(avatarLocalPath);

    if(!avatar)throw new ApiError(409,"Avatar is not uploaded successfully");

    const user=await User.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        avatar:avatar?.url,
        gender
    })

    if(!user)throw new ApiError(500,"Server error while creating new user");

    delete user.password;

    return res.status(201).json(new ApiResponse(200,user,"User created successfully"));
})


module.exports={
    registerUser,
}