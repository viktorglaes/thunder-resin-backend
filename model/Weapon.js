const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user schema
const WeaponSchema = new Schema({
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
  atk: {
    type: Number,
    required: true,
  },
  rarity: {
    type: Number,
    required: true,
  },
  secondary: {
    type: String,
    required: false,
  },
  passive: {
    type: String,
    required: false,
  },
  bonus: {
    type: String,
    required: false,
  },
});

module.exports = Weapon = mongoose.model("weapons", WeaponSchema);
