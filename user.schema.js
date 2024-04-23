const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheam = new Schema({
  name: String,
  age: Number,
  country: String,
  Phone: { type: String, unique: true },
});
module.exports = mongoose.model("user", userScheam);
