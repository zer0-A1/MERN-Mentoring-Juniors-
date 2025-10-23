const home = async (req, res) => {
    try {
        res.send("Hellow World!")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const register = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);
        res.json({message : "How to get user certificates?", data : req.body});
    } catch (error) {
        console.log("Error message", error);
    }
}

const login = async (req, res) => {
    try {
        res.send("Login")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { home, register, login }