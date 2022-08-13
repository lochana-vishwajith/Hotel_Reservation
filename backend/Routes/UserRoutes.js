const express = require("express");
const router = express.Router();

const { loginUser, registerUser } = require("../Controllers/UserController");

router.post("/user", registerUser);

router.post("/login", loginUser);

module.exports = router;
