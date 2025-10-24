const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/db");
const authRouter = require("./routers/auth-router");
const contactRouter = require("./routers/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

dotenv.config();

//Middleware
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
    res.send("Hellow World!111111")
})

app.use(errorMiddleware);

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