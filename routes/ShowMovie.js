import express from 'express';
import { AddMovie, getMovies } from '../controllers/showMovie.js';




const MovieRouter = express.Router();

MovieRouter.post("/", AddMovie)
MovieRouter.get("/", getMovies)

export default MovieRouter;