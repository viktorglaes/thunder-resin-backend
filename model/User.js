const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favorite_character: {
    type: Object,
    required: false,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
