const { Schema, model } = require("mongoose");

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
    default: "female",
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

const User = model("User", userModel);

module.exports = User;

