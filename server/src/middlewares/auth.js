const ApiError = require("../utils/ApiError.js");
const jwt =require("jsonwebtoken")
const User=require("../models/User.model.js");
const asyncHandler = require("../utils/asyncHandler.js");

const verifyJWT=asyncHandler(async(req,res,next)=>{
    try {
        const accessToken=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","");
        // console.log(accessToken)
        if(!accessToken){
            throw new ApiError(401,"Unauthorized access");
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