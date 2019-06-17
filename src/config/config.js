require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 8000,
  TEST_PORT: process.env.TEST_PORT || 7000,
  DB_URL: process.env.DB_CONNECTION_URI || process.env.DB_URL
};
