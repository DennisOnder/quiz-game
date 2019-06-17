const app = require("express")();
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connect");
const applyRoutes = require("./router");
const { PORT } = require("./config/config");

applyMiddleware(app);
applyRoutes(app);
connectDB();

app.listen(PORT, err => {
  if (err) process.exit(1);
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
