const express = require("express");
const router = express.Router();
const Comment = require("../../model/Comment");

router.post("/create", async (req, res) => {
  try {
    let { text, author, userId, branch } = req.body;
    // submit order
    let newComment = new Comment({
      text,
      author,
      userId,
      branch,
    });

    newComment.save().then((order) => {
      return res.status(201).json({
        success: true,
        msg: "Comment is now submitted.",
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  let id = req.query.id;
  await Comment.find({ "branch._id": id }).then((data) => {
    res.send(data);
  });
});

// router.get("/associated-comments", async (req, res) => {
//   let id = req.query.id;
//   console.log(id);
//   await Comment.find({ "branch.id": id }).then((data) => {
//     res.send(data);
//   });
// });

module.exports = router;
