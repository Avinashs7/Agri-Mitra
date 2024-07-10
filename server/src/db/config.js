require("dotenv").config();
const mongoose=require("mongoose")
const {DB_NAME}=require('../constants')
const express=require("express")

const app=express()


const connectDB=async ()=>{
    try{
        const instance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB Host: ${instance.connection.host}`);

    }
    catch(error){
        console.error("MongoDB Connection Failed \n",error);
        process.exit(1);
    }
}

module.exports={connectDB}