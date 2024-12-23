import bcrypt from 'bcrypt';
import User from '../models/User.js';



export function createUser(req,res){

    const newUserData = req.body

    if(newUserData.type == "admin"){

        if(req.user==null){
            res.json({
                message: "You are not logged in. Please login as admin to create admin account..! "
            })

            return
        }

        if(req.user.type != "admin"){
            res.json({
                message: "You are not an admin.. please login as an admin"
            })
        }
    }


    newUserData.password = bcrypt.hashSync(newUserData.password,10)

    const user = new User(newUserData)

    user.save().then(()=>{
        res.json({
            message: "User Created..!"
        })
    }).catch(()=>{
        res.json({
            message: "User not created..!"
        })
    })


}