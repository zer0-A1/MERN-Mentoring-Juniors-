const {z} = require("zod");

const registerSchema = z.object({
    name: z
        .string({message: "Name is required"})
        .min(3, {message: "Name must be at least 3 characters long"})
        .max(30, {message: "Name must be at most 30 characters long"})
        .trim()
        .toLowerCase(),
    email: z
        .string({message: "Email is required"})
        .email({message: "Invalid email address"})
        .trim()
        .toLowerCase(),
    password: z
        .string({message: "Password is required"})
        .min(8, {message: "Password must be at least 8 characters long"})
        .max(30, {message: "Password must be at most 30 characters long"})
        .trim(),
}).strict();


const loginSchema = z.object({
    email: z
        .string({message: "Email is required"})
        .email({message: "Invalid email address"})
        .trim()
        .toLowerCase(),
    password: z
        .string({message: "Password is required"})
        .min(8, {message: "Password must be at least 8 characters long"})
        .max(30, {message: "Password must be at most 30 characters long"})
        .trim(),
}).strict();

module.exports = { registerSchema, loginSchema };