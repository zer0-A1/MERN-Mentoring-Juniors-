const Contact = require("../model/contact-model");

const createContact = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, subject, contact, message } = req.body;

        if (!email || !subject || !contact || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = await Contact.create({ email, subject, contact, message });
        res.status(201).json({ message: "Contact created successfully", Contact: newContact });
    } catch (error) {
        console.log("Error message", error);
        next(error);
    }
}

module.exports = { createContact };