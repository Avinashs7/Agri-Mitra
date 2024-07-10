const express=require("express");
const cookieParser=require("cookie-parser")
const cors=require("cors");

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    optionsSuccessStatus:200,
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:false,limit:"16kb"}));
app.use(express.static("public"))

module.exports={app};