import express from 'express';
import { AddMovie, getMovies } from '../controllers/showMovie.js';
import { AddCommingMovie, getCommingMovie } from '../controllers/CommingMoviecontroller.js';




const MovieRouter = express.Router();

MovieRouter.post("/", AddMovie)
MovieRouter.get("/", getMovies)
MovieRouter.post("/upcoming", AddCommingMovie)
MovieRouter.get("/upcoming", getCommingMovie)



export default MovieRouter;