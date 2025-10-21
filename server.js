const express = require("express")
const logger = require("morgan")
const cors = require("cors")


const commentCtrl =require("./routes/comments.js")
const postCtrl = require('./routes/posts.js')

const PORT = process.env.PORT || 3000

const db = require("./db")

const { Post } = require("./models/Post")
const { Comment } = require("./models/Comment")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

app.use("/comments", commentCtrl)

app.use("/posts", postCtrl)


app.listen(PORT, () => {
  console.log(`Running Server on Port ${PORT} . . . `)
})
