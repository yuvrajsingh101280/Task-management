import User from "../models/user.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/genereatetokenandsetcookie.js"
export const signup = async (req, res) => {


    const { email, name, password } = req.body

    try {
        if (!email || !password || !name) {
            res.status(400).json({ sucess: false, message: "All fields are reuired" })

        }

        const userExist = await User.findOne({ email })


        if (userExist) {
            res.status(400).json({ sucess: false, message: "User already exist" })

        } else {


            const salt = 10
            const hashedPassword = await bcrypt.hash(password, salt)


            const user = new User({ email, name, password: hashedPassword })


            await user.save();


            // generate a token
            generateTokenAndSetCookie(res, user._id)






        }

    } catch (error) {

    }



}