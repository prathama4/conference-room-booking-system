const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users");

// Register User
const register = async (req, res) => {
    try {
        const {
            employee_id,
            full_name,
            email,
            password,
            role,
            department,
            default_location
        } = req.body;

        const existingUser = await userModel.getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.createUser(
            employee_id,
            full_name,
            email,
            hashedPassword,
            role,
            department,
            default_location
        );

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: newUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Login
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                user_id: user.user_id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        );

        res.status(200).json({
            success: true,
            token,
            user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Users
const getUsers = async (req, res) => {

    try {

        const users = await userModel.getAllUsers();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    register,
    login,
    getUsers
};