import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var Note = new Schema({
  content: {type: String, required: true},
  bug: { type: ObjectId, ref: "Bug", required: true },
  reportedBy: { type: String, required: true } //The provided name for who made the note
}, { timestamps: true, toJSON: { virtuals: true } })

export default Note;
