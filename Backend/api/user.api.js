const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

//handlers or api
const register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, gender, dateOfBirth } =
      req.body;

    const old_user = await User.findOne({ email });
    if (old_user) {
      return res
        .status(400)
        .send({ success: false, message: "User Already Register" });
    }

    const user = new User({
      first_name,
      last_name,
      email,
      password,
      gender,
      dateOfBirth,
    });

    await user.save();
    res
      .status(201)
      .send({ success: true, message: "User Register Successfully", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log(req);
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isMatched = await user.isMatched(password);
    if (!isMatched) {
      return res
        .status(400)
        .send({ success: false, message: "Invalid Credentials" });
    }

    const token = await user.generatedToken();
    res
      .status(200)
      .send({ success: true, message: "Login Successfully", user,token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = { register, login };
