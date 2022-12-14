const User = require("../model/user.model");

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
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ success: false, message: error.message });
  }
};
