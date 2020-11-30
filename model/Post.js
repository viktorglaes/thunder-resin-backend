const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("posts", PostSchema);
