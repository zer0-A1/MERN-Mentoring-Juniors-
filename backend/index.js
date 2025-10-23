const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
const router = require("./routers/auth-router");
const app = express();

dotenv.config();

//Middleware
app.use(express.json());
app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("Hellow World!111111")
})

connectDB()
.then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => { 
        console.log(`Server running on port ${PORT}`);
    });

    console.log("MongoDB connected");
})
.catch((err) => { console.log("MongoDB connection error : ", err.message); 
    process.exit(1); });