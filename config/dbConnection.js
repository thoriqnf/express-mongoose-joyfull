require("dotenv").config();

const mongoose = require("mongoose");

const url = process.env.DATABASE_MONGODBATLAS || "localhost";

const dbConnection = mongoose.connect(url);

module.exports = dbConnection;
