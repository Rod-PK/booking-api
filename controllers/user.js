import bcrypt from "bcryptjs";
import { UserModel } from "../models/user";

export const registerUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const userExists = await UserModel.findOne({ email });

        if (userExists) {
            return res.status(400).json("Account already exists!")
        }

        const newUser = new UserModel({ firstName, lastName, email, password });

        await newUser.save()

        return res.status(201).json("User registered!")

    } catch (error) {

    }
    res.json("User registered!");
}

