const Mongoose = require("mongoose");
require('dotenv').config();
const RemoteDB = process.env.SERVER_DB;
const connectDB = async () => {
  Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected");
  })
}
module.exports = connectDB;