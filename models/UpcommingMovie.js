import mongoose  from "mongoose";

const UpcommingMovieSchema = mongoose.Schema({

    movieName:{
        type: String,
        required: true,
        unique: true
    },

    Images : [
        {
            type : String,
            
        }
    ],

    releseDate:{
        type: String,
        required: true,
        
    },

    trailer:{
        type: String
    },

    description : {
        type: String,
        required: true
    }
})

const UpcommingMovie = mongoose.model("commingMovie", UpcommingMovieSchema);

export default  UpcommingMovie;