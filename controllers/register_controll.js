const User = require("../models/db.model");

const User_Register = async (req, res) => {
  try {
    res.status(200).json({ message: "hello sir !! we are live now" });
  } catch (error) {
    res.status(500).json({ msg: "Controller failed !!", error });
  }
};
const User_Register2 = async (req, res) => {
  try {
    const { Username, password } = req.body;
    const newuser = await User.create({ Username, password });
    res.json({ msg: "user created sucessfully !!" });
  } catch (error) {
    res.status(500).json({ msg: "register function failed !!", error });
    console.log(error);
    
  }
};
module.exports = { User_Register, User_Register2 };
