import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const ProfileSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})