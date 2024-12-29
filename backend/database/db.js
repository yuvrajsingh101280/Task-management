import mongoose from "mongoose";
export const connectToDatabase = async () => {

    try {
        await mongoose.connect()
    } catch (error) {

    }


}