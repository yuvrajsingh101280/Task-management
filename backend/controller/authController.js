import User from "../models/user.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/genereatetokenandsetcookie.js";

export const signup = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        // Validate input
        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check if user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create and save new user
        const user = new User({ email, name, password: hashedPassword });
        await user.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(res, user._id);

        return res.status(201).json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.error("Error in creating user:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body


    try {
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })

        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })

        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(400).json({ success: false, message: "wrong password" })

        }

        generateTokenAndSetCookie(res, user._id)


        return res.status(200).json({ success: true, message: "User Logged in successfully" })
    } catch (error) {
        console.log("Error in login", error)
        return res.status(500).json({ succees: false, message: "Internal Server Error" })

    }







}
export const logout = async (req, res) => {

    res.clearCookie("token")
    res.status(200).json({ success: true, message: "Logged out succeesfully" })

}
export const checkAuth = async (req, res) => {
    try {

        const user = await User.findById(req.userId)



        if (!user) {

            return res.status(400).json({ success: false, message: "user not found" })

        }
        return res.status(200).json({ success: true, message: "User is authenticated", user: { ...user._doc, password: undefined } })
    } catch (error) {

        console.log("user is not authenticatd", error)
        res.status(500).json({ success: false, message: "Internal server error" })

    }





}