const mongoose = require("mongoose");
const Db_connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo_uri);
    console.log("database connected !!");
  } catch (error) {
    console.log("database failed !!");
  }
};
module.exports = Db_connect;
