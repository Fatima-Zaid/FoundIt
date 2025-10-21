const router = require("express").Router()
const postCtrl = require("../controllers/posts")
const upload = require("../middleware/upload")


router.get('/', postCtrl.get_post)
router.post("/createPost", upload.single("image"), postCtrl.create_post)
router.delete('/:postId', postCtrl.delete_post)

module.exports = router
