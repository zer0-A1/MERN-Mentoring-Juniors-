const express = require("express");
const router = express.Router();

const { home, register, login } = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { registerSchema, loginSchema } = require("../validator/auth-validator");

router.route("/register").post(validate(registerSchema), register);
router.route("/login").post(validate(loginSchema), login);
router.route("/home").get(home);
module.exports = router;    