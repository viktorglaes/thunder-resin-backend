const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const GuideSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  character: {
    type: Object,
    required: true,
  },
  playstyle: {
    type: String,
    required: true,
  },
  recommendedWeapons: {
    type: Array,
    required: true,
  },
  talentOrder: {
    type: Array,
    required: true,
  },
  author: {
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
  date: {
    type: Date,
    default: Date.now,
  },
  votes: {
    type: Array,
    required: true,
  },
});

module.exports = Guide = mongoose.model("guides", GuideSchema);
