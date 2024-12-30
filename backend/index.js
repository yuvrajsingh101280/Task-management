import express from "express"
import authroutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { connectToDatabase } from "./database/db.js"
import cookieParser from "cookie-parser"
dotenv.config()
const app = express()

connectToDatabase()
app.use(cookieParser())
// routes
app.use("/api/auth", authroutes)
app.listen(process.env.PORT, () => {
    console.log(`server is runnning at port http://localhost:${process.env.PORT}`)


})
