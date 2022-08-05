const { UserModel } = require("../model");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await UserModel.find({});
    console.log(users);

    try {
      res.json({
        message: "berhasil ambil data semua user",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },
};
