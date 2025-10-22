const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const commentSchema = new Schema({
  username: {
    type: String,
    ref: "Post",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  description: {
    type: String,
    required: true,
  },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
