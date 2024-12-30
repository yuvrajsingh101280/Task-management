import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email: {

        type: string,
        required: true,
        unique: true,
    },
    name: {
        type: string,
        required: true,



    },
    password: {
        type: string,
        required: true,

    },


}, { timestamps: true })

export const User = mongoose.model("User", userSchema)