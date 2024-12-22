import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_URI
mongoose.connect(mongoUrl,{})
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database Connected");
})





app.listen(
    5002,
    ()=>{
      console.log('Server is running on port 5002');
    }
  )
  