require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8000,
  DB_URL: process.env.DB_CONNECTION_URI || process.env.DB_URL
};
