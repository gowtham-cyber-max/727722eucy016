const mongoose=require("mongoose")
const bcrypt = require('bcrypt')
const userSchema=new mongoose.Schema({
    number:{
        type:[Number],
        default:[]
    },
    user_id:{
        type:Number
    }
});

const userModel=mongoose.model("user",userSchema);
module.exports=userModel;

