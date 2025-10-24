const validate = (Schema) => async (req, res, next) => {
    try {
        const parsedBody = Schema.parse(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        console.log("Error message", error);
        res.status(400).json({ message: "Validation error", errors: error.errors });
    }
}

module.exports = validate;