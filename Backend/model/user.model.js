const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userModel = new Schema({
  first_name: {
    type: String,
    required: [true, "Please Enter First Name"],
    trim: true,
  },
  last_name: {
    type: String,
    required: [true, "Please Enter Last Name"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    trim: true,
  },
  gender: {
    type: String,
    enum: ["female", "male"],
    default: "male",
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "seller", "user"],
    default: "user",
  },
});

//convert password to hash
userModel.pre("save", async function (next) {
  console.log("this :", this);

  if (this.isModified("password")) {
    const saltRounds = 6;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

//password check function
userModel.methods.isMatched = async function (password) {
  try {
    
    const checked = await bcrypt.compare(password, this.password);

    return checked;
  } catch (error) {
    console.log(error.message);
  }
};

//token genration function
userModel.methods.generatedToken = async function () {
  try {
    const token = jwt.sign({ id: this._id }, process.env.JWTSECRETKEY, {
      expiresIn: "7 days",
    });
    return token;
  } catch (error) {
    console.log(error.message);
  }
};

const User = model("User", userModel);

module.exports = User;
