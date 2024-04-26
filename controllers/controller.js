const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  try {
    res.status(200).send("welcome to Home page using router");
  } catch (error) {
    console.log(error);
  }
};


const register = async (req, res) => {
  console.log("register");
  try {
    const { username, email, phone, password, Cpassword } = req.body;
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const userCreate = await User.create({
      username,
      email,
      phone,
      password,
      Cpassword,
    });
    res.status(200).json({
      message: "user created successfully",
      token: await userCreate.generateToken(),
      userId: userCreate._id.toString(),
    });
  } catch (error) {
    res.status(500).json("internal  error");
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userExists.password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login successfully",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
      console.log("User Logged");
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};


module.exports = { home, register, login };
