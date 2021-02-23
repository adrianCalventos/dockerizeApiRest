const mongoose = require("mongoose");

const User = require("./User.model");

const connection = "mongodb+srv://admin:admin@cluster0.qwixi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
