import mongoose from "mongoose";

const movieSchema = mongoose.Schema({

    movieId : {
        type : String,
        required: true,
        unique: true
    },

    movieName:{
        type: String,
        required: true,
        unique: true
    },

    duration:{
        type: String,
        
    },
    
    ratings:{
        type: String,
       
    },

    showTime:{
        type: String,
        required: true,
        
    },

    showDate:{
        type: String,
        required: true,
        
    },

    trailer:{
        type: String
    },
    
   
    Images : [
        {
            type : String,
            
        }
    ],

    ExpeImages : [
        {
            type : String
        }
    ],


    price : {
        type : Number,
        required: true
    },

    description : {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("showingmovie", movieSchema);

export default Movie;