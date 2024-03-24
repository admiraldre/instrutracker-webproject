import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const ProfileSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    goals: [String],
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);
export default ProfileModel;