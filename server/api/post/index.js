'use strict';

var express = require('express');
var controller = require('./post.controller');
var commentController = require('./post.comment.controller');

var router = express.Router();

router.get('/',auth.isAuthenticated(), controller.index);
router.get('/:id',auth.isAuthenticated(), controller.show);
router.post('/',auth.isAuthenticated(), controller.create);
router.put('/:id',auth.isAuthenticated(), controller.update);
router.patch('/:id',auth.isAuthenticated(), controller.update);
router.delete('/:id',auth.isAuthenticated(), controller.destroy);

router.post('/:id/comments',auth.isAuthenticated(), commentController.create); //Route for creating a new comment. The route requires a post-id.
router.put('/:id/comments/:cid',auth.isAuthenticated(), commentController.update); //Route for updating an existing comment. The route requires a post id and a comment id.
router.patch('/:id/comments/:cid',auth.isAuthenticated(), commentController.update); // Same as above
router.delete('/:id/comments/:cid',auth.isAuthenticated(), commentController.delete); // Route for deleting a comment. The route requires a post id and a comment id.

module.exports = router;