const mongoose = require("mongoose");

// buat schema models

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  telephoneNumber: {
    type: String,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
