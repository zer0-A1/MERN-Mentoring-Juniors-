const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

    
const router = require("./routers/auth-router");

//Middleware
app.use(express.json());

app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hellow World!111111")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
