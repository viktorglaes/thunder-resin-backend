const express = require("express");
const router = express.Router();
const Post = require("../../model/Post");

router.post("/submit", async (req, res) => {
  try {
    let { title, text, author, userId } = req.body;
    // submit order
    let newPost = new Post({
      title,
      text,
      author,
      userId,
    });

    newPost.save().then((order) => {
      return res.status(201).json({
        success: true,
        msg: "Post is now submitted.",
      });
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  await Post.find({}).then((data) => {
    res.send(data);
  });
});

module.exports = router;
