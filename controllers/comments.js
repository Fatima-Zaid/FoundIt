const Comment = require("../models/Comment")

const get_post = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("comments") // ✅ Add populate
    res.status(200).send(posts)
  } catch (error) {
    res.status(500).send({ msg: "Error fetching posts!", error })
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.status(200).send(comment)
  } catch (error) {
    throw error
  }
}
const DeleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "comment Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,
  DeleteComment,
  get_post,
}
