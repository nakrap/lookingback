const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bio: { type: String, required: true },
  DOB: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  // image: { type: image, required: false }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;