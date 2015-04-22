'use strict';

var _ = require('lodash');
var Post = require('./post.model');

/**
Creates a new comment for the specified post.

Since the comment schema is a sub document of posts, the post needs to be saved in order to save the comment. 
Comments can't be saved without a post.
*/
exports.create = function(req, res){
    Post.findById(req.params.id, function(err, post){ //params have id (specified by the post's "Index.js" file)
        if(err) return handleError(err, res, 500);  //Returns an error with the error code 500 (internal server error)
        if(!post) return handleError(err, res, 404); //Returns an error if the post is not found (wrong id)
        var comment = req.body; //Saves the body (JSON) from the request
//        comments.authorId = req.user._id; 
//        comments.authorName = req.user.name;
        post.comments.push(comment); //Adds the comment to the array of comments in the parent (post) class. 
        post.save(function(err){ //Calls the save method in the post-object (from mongoose), which talks to the mongo db
            if(err) return handleError(err, res, 500); //Returns an error with the error code 500 (internal server error)
            return res.json(200, post); //If the object is saved succesfully, the new post object (including the new comment) is return as JSON and the error code 200 (OK).
        });
    });
};


/**
Method for handling error codes as to avoid duplicate lines.
*/
function handleError(err, res, errorCode){
    return res.send(errorCode, err);
}