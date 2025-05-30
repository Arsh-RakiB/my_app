require("dotenv").config();
// module imports ====>
const express = require("express");
// path imports ====>
const router = require("../routes/regiter_route.js");
const Db_connect = require("../db/db_connect.js");
const app = express();
app.use(express.json());
Db_connect();
app.use("/", router);
