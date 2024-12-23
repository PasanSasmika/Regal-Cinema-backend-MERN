import express from 'express';
import { createUser } from '../controllers/usercontroller.js';



const UserRouter = express.Router();

UserRouter.post("/",createUser)


export default UserRouter;