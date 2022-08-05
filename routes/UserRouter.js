const express = require("express");
const router = express.Router();

const { getAllUser } = require("../controller/UserController");

router.get("/", getAllUser);

module.exports = router;
