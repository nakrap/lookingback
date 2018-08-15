const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  // type is either 'image' or 'text'
  type: { type: String, required: true },
  // body is optional for image posts
  body: { type: String, requred: false },
  time : { type : Date, default: Date.now },
  profile: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    text: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  }]  // image: { type: image }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;