import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String, // Corrected to "String"
        required: true,
        unique: true,
    },
    name: {
        type: String, // Corrected to "String"
        required: true,
    },
    password: {
        type: String, // Corrected to "String"
        required: true,
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
