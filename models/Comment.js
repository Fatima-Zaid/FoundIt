const mongoose = require('mongoose')
const { Schema } = require("mongoose")

const commentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment
