import bcrypt from 'bcrypt';
import User from '../models/User.js';



export function createUser(req,res){

    const newUserData = req.body


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