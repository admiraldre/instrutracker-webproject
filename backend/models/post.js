import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  text: String,
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [commentSchema], 
}, { timestamps: true });


const postModel = mongoose.model('Post', postSchema);
export default postModel;