import Movie from "../models/showingMovie.js";
import { isAdmin } from "./usercontroller.js";

export function AddMovie(req,res){

    if(!isAdmin(req)){

        res.json({
            message: "Please log in as an admin to add movies..!"
        })

        return
    }

    const  newMovieData = req.body

    const movie = new Movie(newMovieData)

    movie.save().then(()=>{
        res.json({
            message: "Movie added..!"
        })
    }).catch((error)=>{
        console.log(error)
        res.json({
            message: error
        })
    })
}


export function getMovies(req,res){
    Movie.find({}).then((movie)=>{
        res.json(movie)

    }).catch((error)=>{
        res.json({
            message:error
        })
    })
}