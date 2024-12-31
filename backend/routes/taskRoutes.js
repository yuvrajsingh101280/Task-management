import { createTask, deleteTask, getTasks, updateTask } from "../controller/taskController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express"
const router = express.Router()


// routes


router.post("/create", verifyToken, createTask)
router.put("/update/:id", verifyToken, updateTask)
router.get("/get-tasks", verifyToken, getTasks)
router.delete("/delete/:id", verifyToken, deleteTask)

export default router
