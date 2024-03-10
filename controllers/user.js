const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const userCreateSignup = async (req, res) => {
  const { name, password, email, address } = req.body;
  if (!name || !email || !password || !address) {
    return res
      .status(422)
      .json({ success: false, message: "Input field required" });
  }
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(422)
        .json({ sucess: false, message: "User already exist" });
    }
    const hashPassword =await bcrypt.hash(password, 10);
    const user = new UserModel({
      name,
      password: hashPassword,
      email,
      address,
    });

    await user.save();
    res
      .status(201)
      .json({ sucess: true, data: user, mesaage: "User created suceessfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ sucess: false, message: "Something went wrong" });
  }
};

const userCeateLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password!" });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, SECRET_KEY);
    res.status(200).json({
      success: true,
      message: "User Login  Successfully!",
      user: user,
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { userCreateSignup, userCeateLogin };
