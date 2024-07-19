const ApiError = require("../utils/ApiError");
const jwt =require("jsonwebtoken")
const User=require("../models/User.model");
const asyncHandler = require("../utils/asyncHandler");

const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        const accessToken=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","");
        // console.log(accessToken)
        if(!accessToken){
            throw new ApiError(402,"Unauthorized access");
        }
    
        const decodedToken=jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
        
        if (!user) {   
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401,error.message||"Invalid access token");
    }
});

module.exports=verifyJWT