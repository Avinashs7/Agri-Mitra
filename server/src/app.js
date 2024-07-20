const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")
const cors=require("cors");

//User defined class for API response
const ApiResponse=require("./utils/ApiResponse")

//Middlewares
//middleware to establish the request connection from other port or origin 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
//JSON input accepting middleware and the form can be upto 16kb 
app.use(express.json({limit:"16kb"}));
//Form input accepting middleware and the form can be upto 16kb 
app.use(express.urlencoded({extended:false,limit:"16kb"}));
//static files accessible permission middleware
app.use(express.static("public"))

//REST API Endpoints are defined in the below routers
const userRouter=require("./routes/user.routes")
app.use("/user",userRouter)

const issueRouter=require("./routes/Issues.routes")
app.use("/issue",issueRouter)

const reportRouter=require("./routes/report.route")
app.use("/report",reportRouter)

const farmRouter=require("./routes/farm.route")
app.use("/farm",farmRouter)

const solutionRouter=require("./routes/solutions.route")
app.use("/solution",solutionRouter)

//The last middlewaree to be used, because this is a general error handling middleware if the response isn't ended anywhere the above it will return the error here
app.use((error,req,res,next)=>{
    console.error(error)
    const response=new ApiResponse(error.statuscode||500,null,error.message||"Internal Server error")
    res.status(response.statuscode).json(response)
})

//invoke the cron-jobs
require("./utils/cronJobs")

module.exports=app;