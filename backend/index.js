import express from "express"
import authroutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import { connectToDatabase } from "./database/db.js"
import cookieParser from "cookie-parser"

import taskroute from "./routes/taskRoutes.js"

dotenv.config()
const app = express()

connectToDatabase()
app.use(cookieParser())

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))//for parsing form data
// routes
app.use("/api/auth", authroutes)
app.use("/api/task", taskroute)
app.listen(process.env.PORT, () => {
    console.log(`server is runnning at port http://localhost:${process.env.PORT}`)


})
