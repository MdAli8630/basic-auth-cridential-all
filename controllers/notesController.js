const NoteModel = require("../models/notes");

const addNotes = async (req, res) => {
  console.log(req.userId);
  const { title, descriptions } = req.body;

  const user = new NoteModel({ title, descriptions, userId: req.userId });
  try {
    await user.save();
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find({ userId: req.userId });
    res.status(201).json({ success: true, data: notes });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { addNotes, getAllNotes };
