'use strict';

var express = require('express');
var controller = require('./post.controller');
var commentController = require('./post.comment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.post('/:id/comments', commentController.create); //Route for creating a new comment. The route requires a post-id.
router.put('/:id/comments/:cid', commentController.update); //Route for updating an existing comment. The route requires a post id and a comment id.
router.patch('/:id/comments/:cid', commentController.update); // Same as above
router.delete('/:id/comments/:cid', commentController.delete); // Route for deleting a comment. The route requires a post id and a comment id.

module.exports = router;