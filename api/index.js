import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app =express();
dotenv.config();

mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
   



app.listen(3000,()=>{
    console.log("server is running on port 3000");
})