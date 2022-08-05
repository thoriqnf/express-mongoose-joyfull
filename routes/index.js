const express = require("express");
const router = express.Router();

const UserRouter = require("./UserRouter");

router.get("/", (req, res) => {
  res.json("aplikasi mongoose saya");
});

router.use("/user", UserRouter);

module.exports = router;
