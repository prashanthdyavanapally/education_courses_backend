require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./configs/db");
const bodyparser = require("body-parser");
const authenticate = require("./middlewares/authenticate");

app.use(express.json());
app.use(bodyparser.json());

const courseController = require("./controllers/course.controller");
app.use("/courses", authenticate, courseController);

const authController = require("./controllers/auth.controller");
app.use("/users", authController);

// const signupController = require("./controllers/signupRoute");
// app.use("/register", signupController);

// const loginController = require("./controllers/loginRoute");
// app.use("/login", loginController);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
