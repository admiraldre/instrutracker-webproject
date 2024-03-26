const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  userID: mongoose.Schema.Types.ObjectId 
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
