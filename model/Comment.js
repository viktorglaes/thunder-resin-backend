const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const CommentSchema = new Schema({
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
  branch: {
    type: Object,
    required: true,
  },
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
