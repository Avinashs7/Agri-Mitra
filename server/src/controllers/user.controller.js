const User =require("../models/User.model.js")
const ApiResponse=require("../utils/ApiResponse.js")
const ApiError=require("../utils/ApiError.js")
const AsyncHandler=require("../utils/asyncHandler.js")
const uploadToCloudinary=require("../utils/cloudinary.js")
const crypto=require("crypto")
const Otp=require("../models/Otp.model.js")
const {sendValidationMail}=require("../utils/nodemailer.js")
const mongoose=require("mongoose")
const asyncHandler = require("../utils/asyncHandler.js")

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

//Helper function to handle the deletion of the OTP's after 5 minute. This is a safety function as the deletion is already handled even the mongoose schema also.
const deleteOtp=async()=>{
    const expirationTime = new Date(Date.now() - 5 * 60 * 1000); // 5 minutes ago
    try {
        await Otp.deleteMany({ createdAt: { $lt: expirationTime } });
        // console.log('Expired OTPs deleted');
    } catch (err) {
        console.error('Error deleting expired OTPs:', err);
    }
}

const generateOtp=async(userId,length=6)=>{
    const otp = crypto.randomBytes(length)
    // Convert the bytes to a hexadecimal string
    .toString('hex')
    // Extract only the numeric characters
    .replace(/\D/g, '');
    // Ensure the OTP has the desired length by truncating or padding with zeros if necessary
    const generatedOtp = otp.substring(0, length).padEnd(length, '0');
    sendValidationMail(userId,generatedOtp);
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
    generateOtp(user._id);
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
        if(validUser.verified===false)
            throw new ApiError(405,"User email is not verified");
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

const verifyOtp=AsyncHandler(async(req,res)=>{
    const id=new mongoose.Types.ObjectId(req.params?.id);
    const {otp}=req.body;
    const otpDoc=await Otp.findOne({userId:id});
    if(!otpDoc)
        throw new ApiError(404,"OTP expired")
    if(new Date(otpDoc.createdAt).getTime()+5*60*1000 > Date.now())
    {
        if(otp===otpDoc.otp){
            const user=await User.findById(id);
            user.verified=true;
            await user.save(); 
            await Otp.deleteMany({userId:id});
            return res.status(200).send(new ApiResponse(200,null,"Email Verified"));
        }
        else{
            return res.status(403,null,"Wrong Otp");
        }
    }

});

const getUser=asyncHandler(async(req,res)=>{
    const user=req.user;
    const userDetails=await User.findOne({_id:user._id}).select("-password").lean()
    if(!userDetails){
        throw new ApiError(402,"No user found");
    }
    return res.status(200).send(new ApiResponse(200,{accessToken:"",...userDetails},"user details sent"));
})

const logout=asyncHandler(async(req,res)=>{
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return res.status(200).send(new ApiResponse(200,null,"successfully logged out"));
})

module.exports={
    registerUser,
    loginUser,
    verifyOtp,
    deleteOtp,
    getUser,
    logout
}