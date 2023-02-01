const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.azfufbj.mongodb.net/education?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connect;

// mongodb://127.0.0.1:27017/education
// mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.azfufbj.mongodb.net/education?retryWrites=true&w=majority
