import {model, Schema } from "mongoose";

const userSchema = new Schema({
  name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    adress:{
        type:String,

    },
    phone:{
        type:String,
    }
})

const User =model("User",userSchema);
export default User