const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const URI = process.env.MONGODB_URI;

const connectDB = async ()=> {

    if (!URI) {
        console.log("MongoDB connection error : URI is not defined");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(URI, {
            dbName: "First Mern Project",
        });
        console.log(`MongoDB is connectd : ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error : ", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;