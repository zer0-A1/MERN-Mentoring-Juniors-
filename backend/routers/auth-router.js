const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/home").get(home);

module.exports = router;    