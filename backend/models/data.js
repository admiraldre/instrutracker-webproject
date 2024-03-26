import mongoose from "mongoose";

const { Schema } = mongoose;

const goalSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String
}, { timestamps: true });

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;
