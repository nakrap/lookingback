const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  DOB: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);