import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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


export default function loginUser(req,res){

    User.find({email: req.body.email}).then(
        (users)=>{
            if(users.length == 0){
                res.json({
                    message: "User not found...!"
                })

            } else{

                const user = users[0]

                 const isPasswordCorrect  =  bcrypt.compareSync(req.body.password, user.password)

                 if(isPasswordCorrect){
                    const token = jwt.sign({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        profilePic: user.profilePic,
                        type: user.type,
                        isBlocked: user.isBlocked
                    },process.env.SECRET)
                            res.json({
                                message: "Logged in successful..!",
                                token: token
                            })
                 } else{
                    res.json({
                        message: "Your Password is incorrect..!"
                    })
                 }
            }
        }
    )
}