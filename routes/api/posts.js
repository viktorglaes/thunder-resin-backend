const express = require("express");
const router = express.Router();
const Post = require("../../model/Post");

router.post("/submit", async (req, res) => {
  try {
    let { title, text, author, userId, votes } = req.body;
    // submit order
    let newPost = new Post({
      title,
      text,
      author,
      userId,
      votes,
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

router.put("/:postId", async (req, res) => {
  await Post.findById(req.params.postId, (err, post) => {
    post.votes = req.body.votes;
    post.save();
    res.json(post);
  });
});

router.get("/", async (req, res) => {
  await Post.find({}).then((data) => {
    res.send(data);
  });
});

module.exports = router;
