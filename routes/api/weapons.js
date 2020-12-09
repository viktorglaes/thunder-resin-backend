const express = require("express");
const router = express.Router();
const Weapon = require("../../model/Weapon");

router.get("/", async (req, res) => {
  await Weapon.find({}).then((data) => {
    res.send(data);
  });
});

// router.post("/create", async (req, res) => {
//   try {
//     let { name, type, img, atk, rarity, secondary, passive, bonus } = req.body;
//     // submit order
//     let newWeapon = new Weapon({
//       name,
//       type,
//       img,
//       atk,
//       rarity,
//       secondary,
//       passive,
//       bonus,
//     });

//     newWeapon.save().then((order) => {
//       return res.status(201).json({
//         success: true,
//         msg: "Post is now submitted.",
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
