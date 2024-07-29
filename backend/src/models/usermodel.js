// import connectDB from "../db";
import mongoose from "mongoose";
    const userSchema=new mongoose.Schema({
        Username:{
            type:String,
            required:true,
            unique:true
        },
        Email:{
            type:String,
            required:true,
            unique:true
        },
        Password:{
            type:String,
            required:true
        },
        Profilepic:{
            type:String
        },
        Token:{
            type:String
        }
    })
    const User=mongoose.model('User',userSchema) ;
export default User

