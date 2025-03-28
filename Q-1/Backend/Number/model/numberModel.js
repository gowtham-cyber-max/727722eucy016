const mongoose=require("mongoose")
const bcrypt = require('bcrypt')
const userSchema=new mongoose.Schema({
    number:{
        type:[number],
        default:[]
    },
    user_id:{
        type:number
    }
});

const userModel=mongoose.model("user",userSchema);
module.exports=userModel;

