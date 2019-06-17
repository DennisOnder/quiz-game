const app = require("express")();
const port = process.env.PORT || 8000;
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connect");

applyMiddleware(app);

connectDB();

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);

module.exports = app;
