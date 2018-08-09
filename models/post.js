const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  type: { type: String, required: true },
  body: { type: String, requred: false },
  time : { type : Date, default: Date.now },
  comments: { type: Array, default: []}
  // image: { type: image }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;