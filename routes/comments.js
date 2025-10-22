const router = require('express').Router()
const commentCtrl = require('../controllers/comments')

router.post('/:postId', commentCtrl.CreateComment)
router.delete('/:commentId', commentCtrl.DeleteComment)

module.exports = router
