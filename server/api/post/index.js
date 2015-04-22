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

module.exports = router;