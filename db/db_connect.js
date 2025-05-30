const mongoose = require("mongoose");
const Db_connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://rakib:99880@cluster0.kaond.mongodb.net/puccypuccy");
    console.log("database connected !!");
  } catch (error) {
    console.log("database failed !!");
  }
};
module.exports = Db_connect;
