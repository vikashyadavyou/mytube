import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';


const app=express();
const PORT= process.env.PORT || 5000;

app.use(cors);
app.use(express.json());

 mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser:true, useUnifiedTopology:true});
 app.listen(PORT, ()=>{
    console.log("Successfully connected");
 })