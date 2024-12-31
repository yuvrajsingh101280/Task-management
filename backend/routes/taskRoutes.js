import { verifyToken } from "../middleware/verifyToken.js";
import express from "express"
const router = express.Router()


// routes


router.post("/create", verifyToken)
router.put("/update/:id", verifyToken)
router.get("/get-tasks", verifyToken)
router.delete("/delete/:id", verifyToken)

export default router
