const express = require("express");
const { addNotes, getAllNotes } = require("../controllers/notesController");
const auth = require("../middleware/auth")

const NotesRouter = express.Router();

NotesRouter.post("/addNotes",
    auth, addNotes);
NotesRouter.get("/getAllNotes", getAllNotes);

module.exports = NotesRouter;
