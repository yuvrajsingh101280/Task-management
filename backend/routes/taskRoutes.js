import { createTask, deleteTask, getTasks, updateTask } from "../controller/taskController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import express from "express"
const router = express.Router()


// routes


router.post("/createtask", verifyToken, createTask)
router.put("/updatetask/:id", verifyToken, updateTask)
router.get("/get-tasks", verifyToken, getTasks)
router.delete("/deletetask/:id", verifyToken, deleteTask)

export default router
