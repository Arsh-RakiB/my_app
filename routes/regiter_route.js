const express = require('express');
const {User_Register,User_Register2} = require('../controllers/register_controll.js');
const router = express.Router();
router.get('/',User_Register)
router.post('/register', User_Register2)
module.exports=router;