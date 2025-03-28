const express=require('express');
const { prime } = require('./externalController');
const router=express.Router();

router.route("/prime")
    .get(prime);

module.exports=router;