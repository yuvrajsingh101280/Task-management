
import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {

    const token = req.cookies.token
    try {
        if (!token) {
            return res.status(400).json({ success: false, message: "No token provided" })

        }
        // decode the token

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(400).json({ success: false, message: "Invalid token" })

        }
        req.userId = decoded.userId
        next()

    } catch (error) {
        console.log("error in verifing token,", error)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }



}