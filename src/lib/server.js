const config = require("../config/config");

module.exports = app => {
  app.listen(config.PORT, err => {
    if (err) process.exit(1);
    console.log(`Server running on http://localhost:${config.PORT}`);
  });
  return true;
};
