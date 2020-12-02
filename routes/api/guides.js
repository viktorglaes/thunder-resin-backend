const express = require("express");
const router = express.Router();
const Guide = require("../../model/Guide");

router.get("/", async (req, res) => {
  await Guide.find({}).then((data) => {
    res.send(data);
  });
});

router.post("/submit", async (req, res) => {
  console.log("req", req);
  try {
    let {
      title,
      text,
      author,
      userId,
      character,
      playstyle,
      recommendedWeapons,
      talentOrder,
      votes,
    } = req.body;
    // submit order
    let newGuide = new Guide({
      title,
      text,
      author,
      userId,
      character,
      playstyle,
      recommendedWeapons,
      talentOrder,
      votes,
    });

    newGuide.save().then((guide) => {
      return res.status(201).json({
        success: true,
        msg: "Guide is now submitted.",
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.put("/:guideId", async (req, res) => {
  await Guide.findById(req.params.guideId, (err, guide) => {
    guide.votes = req.body.votes;
    guide.save();
    res.json(guide);
  });
});

module.exports = router;
