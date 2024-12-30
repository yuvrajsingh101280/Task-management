import express from "express"
import { checkAuth, login, logout, signup } from "../controller/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();


// chechk if the user authenticated 
router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
export default router


