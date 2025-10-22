const Comment = require("../models/Comment")
const Post =require("../models/Post")



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
}
