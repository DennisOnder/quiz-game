const app = require("express")();
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connect");
const startServer = require("./lib/server");
const applyRoutes = require("./router");

applyMiddleware(app);
startServer(app);
applyRoutes(app);
connectDB();

module.exports = app;
