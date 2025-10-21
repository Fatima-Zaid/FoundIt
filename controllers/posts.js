const Post = require("../models/Post.js")

exports.get_post = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.status(200).send(posts)
  } catch (error) {
    res.status(500).send({ msg: "Error fetching posts!", error })
  }
}

exports.create_post = async (req, res) => {
  try {
    let newPost = await Post.create(req.body)
    res.status(200).send(newPost)
  } catch (error) {
    res.status(500).send({ msg: "Error creating new post!", error })
  }
}

exports.delete_post = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: "Post Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}
