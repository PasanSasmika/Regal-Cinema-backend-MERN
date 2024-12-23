import mongoose from "mongoose";


const UsersSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    profilePic: {
        type: String,
        default: "https://freesvg.org/img/abstract-user-flat-3.png"
    },

    type: {
        type: String,
        default: "customer"
    },

    isBlocked: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("users", UsersSchema)

export default User;