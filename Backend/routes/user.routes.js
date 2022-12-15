const express = require("express");
const { register, login } = require("../api/user.api");

const userRoutes = express.Router();

//routes.methods("/url path",  ...handlers)
userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = userRoutes;
