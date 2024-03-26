const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  img: String, 
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  userID: mongoose.Schema.Types.ObjectId 
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
