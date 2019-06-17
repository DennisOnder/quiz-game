const router = require("express").Router();

router.get("/test", (req, res) => {
  res.status(200).send("Server running. Status: Green; Code: 200 OK!");
});

module.exports = router;
