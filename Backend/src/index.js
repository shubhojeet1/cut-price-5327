const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDatabase = require("../config/connectDatabase.config");
const userRoutes = require("../routes/user.routes");
const passport = require("../config/googleAuth.js");
const User = require("../model/user.model");
const axios = require("axios");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => res.send('Hello Himanshu'))
app.use("/api/v1", userRoutes);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async function (req, res) {
    // Successful authentication, redirect home.
    //console.log(req.user);

    try {
      const oldUser = await User.findOne({ email: req.user.email });

      if (!oldUser) {
        req.user.password = "123456";

        const { data } = await axios("http://localhost:8080/api/v1/register", {
          method: "post",
          data: {
            ...req.user,
          },
        });

        //if (data.message === "User Already Register")
        {
          const { data } = await axios("http://localhost:8080/api/v1/login", {
            method: "post",
            data: {
              ...req.user,
            },
          });

          res.status(200).send({
            ...data,
          });
        }
      } else {
        const { data } = await axios("http://localhost:8080/api/v1/login", {
          method: "post",
          data: {
            ...req.user,
            password: "123456",
          },
        });
        
       return res.redirect("http://localhost:3000/women");

        // return res.status(200).send({
        //   ...data,
        // });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }

     
    //res.send({ success: true, user: req.user });
  }
);

const port = process.env.PORT;
app.listen(port, async () => {
  try {
    await ConnectDatabase();
    console.log(`http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
