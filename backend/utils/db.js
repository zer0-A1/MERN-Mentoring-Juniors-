const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();


const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    if (!URI) {
        console.log("MongoDB URI not provided; starting server without database connection");
        return; // non-fatal
    }

    try {
        const conn = await mongoose.connect(URI, {
            dbName: "db",
        });
        console.log(`MongoDB is connected : ${conn.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error : ", error.message);
        // don't exit; allow server to run for non-DB routes
    }
}

module.exports = connectDB;