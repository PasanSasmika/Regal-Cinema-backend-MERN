import foods from "../models/foodModel.js"
import { isAdmin } from "./usercontroller.js"


export function AddFood(req,res){

    if(!isAdmin(req)){
    
            res.json({
                message: "Please log in as an admin to add foods..!"
            })
    
            return
        }

    const newFoodData = req.body

    const food = new foods(newFoodData)

    food.save().then(()=>{
        res.json({
            message: "Food added..!"
        })
    }).catch((error)=>{
        console.log(error)
        res.json({
            message: error
        })
    })
}

export function getFood(req,res){

    foods.find({}).then((food)=>{
        res.json(food)

    }).catch((error)=>{
        res.json({
            message: error
        })
    })
}