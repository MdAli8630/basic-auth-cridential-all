const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/user");
const NotesRouter = require("./routes/notesRoute");
require("./database/dbConn")
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api", UserRouter);
app.use("/api", NotesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening: ${PORT}`)
});

