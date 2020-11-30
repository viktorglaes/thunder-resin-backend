const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User");
const { restart } = require("nodemon");

/**
 * post to api/users/register
 * user registering
 */

// router.get("/", async (req, res) => {
//   const searchField = req.query.name;
//   await User.find({}).then((data) => {
//     res.send(data);
//   });
// });

router.post("/register", async (req, res) => {
  try {
    let { username, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
      return res.status(400).json({
        msg: "Passwords do not match.",
      });
    }
    // check for unique username
    await User.findOne({ username: username }).then((user) => {
      if (user) {
        throw res.status(400).json({
          msg: "Username is already taken.",
        });
      }
    });

    // check for unique email
    await User.findOne({ email: email }).then((user) => {
      if (user) {
        throw res.status(400).json({
          msg: "Email is already registered.",
        });
      }
    });

    // register user
    let newUser = new User({
      username,
      password,
      email,
    });

    //hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          return res.status(201).json({
            success: true,
            msg: "User is now registered.",
          });
        });
      });
    });
  } catch (err) {
    console.log(err);
  }
});

/**
 * post to api/users/login
 * user logging in
 */

router.post("/login", async (req, res) => {
  await User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Unable to authenticate.",
        success: false,
      });
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //pass correct and send token
        const payload = {
          _id: user._id,
          name: user.name,
          email: user.email,
          username: user.username,
        };
        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
          res.status(200).json({
            success: true,
            user: user,
            token: `Bearer ${token}`,
            msg: "You are now logged in.",
          });
        });
      } else {
        return res.status(404).json({
          msg: "Unable to authenticate.",
          success: false,
        });
      }
    });
  });
});

/**
 * post to api/users/profile
 * getting profile page
 */

router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

//write patch request for addresses

module.exports = router;
