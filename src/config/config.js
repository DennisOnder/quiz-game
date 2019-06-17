require("dotenv").config();

module.exports = {
  DB_URL: process.env.DB_CONNECTION_URI || process.env.DB_URL
};
