import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import MovieRouter from './routes/ShowMovie.js';
import bodyParser from 'body-parser';
import foodRouter from './routes/FoodRouter.js';
import UserRouter from './routes/UserRouter.js';


dotenv.config();

const app = express();

const mongoUrl = process.env.MONGO_URI
mongoose.connect(mongoUrl,{})
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Database Connected");
})


app.use(bodyParser.json())

app.use(
  (req,res,next)=>{

    const token = (req.header("Authorization"))?.replace("Bearer ", "")

    if(token != null){
      jwt.verify(token, process.env.SECRET, (error, decoded)=>{
        if(!error){
          req.user = decoded
        }
      })
    }
    next()
  }
)

app.use("/api/movies", MovieRouter)
app.use("/api/foods", foodRouter)
app.use("/api/users", UserRouter)



app.listen(
    5002,
    ()=>{
      console.log('Server is running on port 5002');
    }
  )
  