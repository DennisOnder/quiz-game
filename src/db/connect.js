const config = require("../config/config");
const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(config.DB_URL, { useNewUrlParser: true });
  console.log("MongoDB connected.");
};
