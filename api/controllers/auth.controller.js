import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
    });

        await newUser.save();

        res.status(201).send("User has been created.");
    } catch (error) {
        res.status(500).send("Something went wrong!")
    }
};

export const login = async (req, res, next) => {

};

export const logout = async (req, res, next) => {

};