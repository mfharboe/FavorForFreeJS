'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
The comments require an author ID and name; the name is for showing and the ID is for easy referencing. 
*/
var PostCommentSchema = new Schema({
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //Reference to the user ID only.
    authorName: String, //Name of the user who posted it. 
    date: {type: Date, default: Date.now}, //gets the current date
    comment: String //The body of the comment
});

module.exports = mongoose.model('PostComment', PostCommentSchema);