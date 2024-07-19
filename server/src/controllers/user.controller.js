const User =require("../models/User.model.js")
const ApiResponse=require("../utils/ApiResponse.js")
const ApiError=require("../utils/ApiError.js")
const AsyncHandler=require("../utils/asyncHandler.js")
const uploadToCloudinary=require("../utils/cloudinary.js")

//helper function to generate refresh token and access token for the valid user
const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}



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
    // console.log(req.file)
    const avatarLocalPath=req.file?.path;

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
    return res.status(201).json(new ApiResponse(200,user,"User created successfully"));
})

const loginUser=AsyncHandler(async(req,res)=>{
    const {
        email,
        password,
    }=req.body;
    if (!email) {
        throw new ApiError(400, "email is required")
    }
    const user=await User.findOne({email:email});
    if(!user){
        throw new ApiError(402,"No user exists");
    }
    const validUser=await user.checkPassword(password);
    if(validUser){
        const {accessToken,refreshToken}=await generateAccessAndRefereshTokens(user._id);
        const data=await User.findById(user._id).select("-password -refreshToken").lean();
        const options = {
            httpOnly: true,
            secure: true
        };
        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .send(new ApiResponse(202,{accessToken:accessToken,refreshToken:refreshToken,...data},"Login successfully"));
    }
    else{
        return new ApiResponse(400,null,"Login Unsuccessfull");
    }
})

module.exports={
    registerUser,
    loginUser,
}