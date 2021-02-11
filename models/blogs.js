const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
    maxLength: 20,
    lowerCase: true,
    unique: true,
  },
  age: { type: Number },
  content: { type: String, required: true },
  rating: { type: Number },
  published: { type: Boolean, required: true },
  blog_tags: { type: Object },
});
module.exports = mongoose.model("Post", postSchema);
