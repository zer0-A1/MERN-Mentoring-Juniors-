const User = require("../model/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try {
        res.send("Hellow World!")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const register = async (req, res) => {
    
    try {
        const { name, email, password } = req.body;
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(String(password), saltRound);
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ name, email, password: hashedPassword });
        const token = await newUser.generateToken();
        res.status(201).json({ message: "User created successfully", CreatedUser: newUser, token: token, userId: newUser._id });
    } catch (error) {
        console.log("Error message", error);
        res.status(500).json({ message: "Internal server error : " + error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = await user.generateToken();
        res.status(200).json({ message: "Login successful", user: user, token: token, userId: user._id });
    } catch (error) {
        console.log("Error message", error);
        next(error);
    }
}

module.exports = { home, register, login }



