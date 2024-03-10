const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    descriptions: {
      type: String,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
