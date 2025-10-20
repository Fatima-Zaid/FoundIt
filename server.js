const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const PORT = process.env.PORT || 3000

const db = require("./db")

const { Post } = require("./models/Post")
const { Comment } = require("./models/Comment")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

app.get("/", async (req, res) => {
  res.send("Hello")
})

app.listen(PORT, () => {
  console.log(`Running Server on Port ${PORT} . . . `)
})
