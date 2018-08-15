const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  contributedTo: { type: Array, default: [], required: true },
  // image: { type: image, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;