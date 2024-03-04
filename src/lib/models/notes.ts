import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema({
  title: { type: "string", required: true },
  description: { type: "string" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;
