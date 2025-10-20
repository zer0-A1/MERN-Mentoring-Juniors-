const home = async (req, res) => {
    try {
        res.send("Hellow World!")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const register = async (req, res) => {
    try {
        res.send("Register")
    } catch (error) {
        res.status(500).json({ message: error.message })
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