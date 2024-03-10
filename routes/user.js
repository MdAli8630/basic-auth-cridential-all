const express = require("express");
const { userCreateSignup, userCeateLogin } = require("../controllers/user");
const UserRouter = express.Router();

UserRouter.post("/signup", userCreateSignup);
UserRouter.post("/login", userCeateLogin);
module.exports = UserRouter;