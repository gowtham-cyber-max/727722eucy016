const express = require('express');
const { addNumber, addUser, change } = require('./numberController');
const router=express.Router();



router.route("/").post(change);

router.route("/add-user").post(addUser);

module.exports=router;