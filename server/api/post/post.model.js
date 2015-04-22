'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    postComment = require('./post.comment.model');

var PostSchema = new Schema({
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //Reference to the user ID only.
    authorName: String, //Name of the user who posted it. 
    date: {type: Date, default: Date.now}, //gets the current date.
    isHelper: Boolean, //Determines if the user is needing help or wants to help. Set true if the user wants to help, false if the user needs help
    isOpen: Boolean, //Is the post closed
    postal: String,
    // GPS_Latitude: Float
    // GPS_Longtitude: Float
    body: String,
    participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //Users who have participated in the comments
    comments: [postComment.schema] //Array of comments for the post
});

module.exports = mongoose.model('Post', PostSchema);