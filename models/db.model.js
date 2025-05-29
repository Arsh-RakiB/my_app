const  mongoose  = require("mongoose");
const UserSchema = new mongoose.Schema({
    Username:{
        type : String,
        required : true,
        unique :true
    },
    password:{
        type : String,
        required : true,
        minlength:[6],
        select :false
    },
});

const User =mongoose.model("User", UserSchema);

module.exports = User;
