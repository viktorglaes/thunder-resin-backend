const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

//init app
const app = express();

//middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use(passport.initialize());

require("./config/passport")(passport);

//setup static dir
app.use(express.static(path.join(__dirname, "public")));

//bring in database config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connected successfully on ${db}`);
  })
  .catch((err) => console.log(`Unable to connect db ${err}`));

//bring in users route
const users = require("./routes/api/users");
app.use("/api/users", users);

//posts route
const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

//characters route
const characters = require("./routes/api/characters");
app.use("/api/characters", characters);

//weapons route
const weapons = require("./routes/api/weapons");
app.use("/api/weapons", weapons);

//guides route
const guides = require("./routes/api/guides");
app.use("/api/guides", guides);

//feedback route
const comments = require("./routes/api/comments");
app.use("/api/comments", comments);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
