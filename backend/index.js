import express from "express"

import dotenv from "dotenv"
import { connectToDatabase } from "./database/db.js"
dotenv.config()
const app = express()

connectToDatabase()
app.get("/", (req, res) => {
    res.send("Hello world")

})

app.listen(process.env.PORT, () => {
    console.log(`server is runnning at port http://localhost:${process.env.PORT}`)


})
