const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  weapon: {
    type: String,
    required: true,
  },
  rarity: {
    type: Number,
    required: true,
  },
});

module.exports = Character = mongoose.model("characters", CharacterSchema);
