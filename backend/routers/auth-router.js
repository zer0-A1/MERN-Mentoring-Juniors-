const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");

router.route("/register").get(register);
router.route("/login").get(login);
router.route("/home").get(home);

module.exports = router;    