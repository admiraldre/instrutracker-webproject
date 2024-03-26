import mongoose from "mongoose";

const { Schema } = mongoose;

const practiceSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: String,
    duration: String,
    notes: String
});

const PracticeModel = mongoose.model('Practice', practiceSchema);

export default PracticeModel;
