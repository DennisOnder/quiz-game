const serverRoutes = require("./api/server");
const questionRoutes = require("./api/question");

module.exports = app => {
  app.use("/api/server", serverRoutes);
  app.use("/api/question", questionRoutes);
};
