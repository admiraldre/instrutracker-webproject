import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const forumPostSchema = new Schema({
    forumTitle:{
        type: String,
        required: true
    },
    forumDesc:{
        type: String,
        required: true
    }
})

const ForumPostModel = mongoose.model('ForumPost', forumPostSchema);
export default ForumPostModel;
