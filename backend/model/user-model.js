const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

userSchema.methods.generateToken = async function() {
    try {
        const token = jwt.sign({id: this._id, name: this.name, email: this.email}, process.env.JWT_SECRET, { expiresIn: "1h" });
        return { token, expiresIn: "7d" };
    } catch (error) {
        console.log("Error message", error);
        throw new Error("Internal server error : " + error.message);
    }    
}

const User = mongoose.model("User", userSchema);

module.exports = User;