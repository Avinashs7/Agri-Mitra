require("dotenv").config()

const {connectDB}=require("./db/config");
const express=require("express");
const app=express();
const PORT=process.env.PORT||8080;

connectDB()
.then(()=>{
    app.on("Error",(error)=>{
        console.error(error);
        process.exit(1);
    })
    app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB error",error);
})