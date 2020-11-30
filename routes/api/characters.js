const express = require("express");
const router = express.Router();
const Character = require("../../model/Character");

router.get("/", async (req, res) => {
  await Character.find({}).then((data) => {
    res.send(data);
  });
});

module.exports = router;
