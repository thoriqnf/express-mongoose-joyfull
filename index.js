const express = require("express");
const cors = require("cors");

const dbConnection = require("./config/dbConnection");
const router = require("./routes");
// console.log(router);

const app = express();
const PORT = process.env.PORT || 8000;

// koneksi ke db mongodb atlas
dbConnection
  .then(() => console.log("berhasil connect"))
  .catch((error) => console.log("error"));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("running on port: " + PORT);
});
