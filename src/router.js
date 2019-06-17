const serverRoutes = require("./api/server");

module.exports = app => {
  app.use("/api/server", serverRoutes);
};
