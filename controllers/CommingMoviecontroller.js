import UpcommingMovie from "../models/UpcommingMovie.js"



export function AddCommingMovie(req,res){

    if(!isAdmin(req)){
    
            res.json({
                message: "Please log in as an admin to add movies..!"
            })
    
            return
        }

    const newUpMovieData = req.body

    const movie = new UpcommingMovie (newUpMovieData)

    movie.save().then(()=>{
        res.json({
            message: "Upcomming Movie added..!"
        })
    }).catch((error)=>{
        console.log(error)
        res.json({
            message:error
        })
    })
}

export function getCommingMovie(req,res){

    UpcommingMovie.find({}).then((movie)=>{
        res.json(movie)
    
    }).catch((error)=>{
        res.json({
            message:error
        })
    })

}