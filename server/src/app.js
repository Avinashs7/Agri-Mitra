const express=require("express");
const app=express();
const cors=require("cors");
const morgan = require('morgan');

//User defined class for API response
const ApiResponse=require("./utils/ApiResponse.js")

//Middlewares
//middleware to establish the request connection from other port or origin 
app.use(cors({
    origin:[
        process.env.CORS_ORIGIN,
        'http://localhost:5173'
    ],
    credentials:true,
}));
//JSON input accepting middleware and the form can be upto 16kb 
app.use(express.json({limit:"16kb"}));
//Form input accepting middleware and the form can be upto 16kb 
app.use(express.urlencoded({extended:false,limit:"16kb"}));
//static files accessible permission middleware
app.use(express.static("public"))
//To log the contents of when an api endpoint is hit
app.use(morgan('dev'));
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


//REST API Endpoints are defined in the below routers
const userRouter=require("./routes/user.routes.js")
app.use("/user",userRouter)

const issueRouter=require("./routes/issues.routes.js")
app.use("/issue",issueRouter)

const reportRouter=require("./routes/report.route.js")
app.use("/report",reportRouter)

const farmRouter=require("./routes/farm.route.js")
app.use("/farm",farmRouter)

const solutionRouter=require("./routes/solutions.route.js")
app.use("/solution",solutionRouter)

const predictionRoute=require("./routes/prediction.route.js")
app.use("/predict",predictionRoute)

app.get("/",(req,res)=>{
    return res.send({message:"I am here"});
})

//The last middlewaree to be used, because this is a general error handling middleware if the response isn't ended anywhere the above it will return the error here
app.use((error,req,res,next)=>{
    console.error(error)
    const response=new ApiResponse(error.statuscode||500,null,error.message||"Internal Server error")
    res.status(response.statuscode).json(response)
})

//invoke the cron-jobs
require("./utils/cronJobs.js")

module.exports=app;