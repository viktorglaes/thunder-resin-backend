const express = require("express");
const router = express.Router();
const Weapon = require("../../model/Weapon");

router.get("/", async (req, res) => {
  await Weapon.find({}).then((data) => {
    res.send(data);
  });
});

module.exports = router;
