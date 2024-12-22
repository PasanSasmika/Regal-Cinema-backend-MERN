import mongoose from "mongoose";

const food = mongoose.Schema({

    foodId : {
        type: String,
        required: true
    },

    foodName: {
        type: String,
        required: true
    },

    foodPrice: {
        type: Number,
        required: true
    },

    Images : [
        {
            type : String,
            
        }
    ],

})

const foods = mongoose.model("foods", food)

export default foods;

