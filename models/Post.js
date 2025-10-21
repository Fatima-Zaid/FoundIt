const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const postSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)
module.exports = Post
