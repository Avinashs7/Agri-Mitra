const express=require("express");
const cookieParser=require("cookie-parser")
const cors=require("cors");

const ApiResponse=require("./utils/ApiResponse")

const app=express();

//Middlewares

//middleware to establish the request connection from other port or origin 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    optionsSuccessStatus:200,
}));
//JSON input accepting middleware and the form can be upto 16kb 
app.use(express.json({limit:"16kb"}));
//Form input accepting middleware and the form can be upto 16kb 
app.use(express.urlencoded({extended:false,limit:"16kb"}));
//static files accessible permission middleware
app.use(express.static("public"))

//The last middlewaree to be used, because this is a general error handling middleware if the response isn't ended anywhere the above it will return the error here
app.use((error,req,res,next)=>{
    console.error(error)
    const response=ApiResponse(error.statuscode||500,null,error.message||"Internal Server error")
    res.status(response.statuscode).json(response)
})

module.exports={app};