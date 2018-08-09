const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deceasedSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: String, required: true },
  DOD: { type: String, required: true },
  // image: { type: image, required: false }
});

const Deceased = mongoose.model("Deceased", deceasedSchema);

module.exports = Deceased;