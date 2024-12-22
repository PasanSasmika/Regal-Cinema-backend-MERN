import express from 'express';
import { AddFood, getFood } from '../controllers/foodscontroller.js';


const foodRouter = express.Router();

foodRouter.post("/", AddFood)
foodRouter.get("/", getFood)

export default foodRouter;