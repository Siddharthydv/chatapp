import { Router } from "express";
import signup from "../controllers/signup.js";
import jwtverify from "../controllers/jwtverify.js";
import { userrouter } from "./userrouter.js";
import { login } from "../controllers/login.js";
const mainrouter=Router();
mainrouter.post('/signup',signup);
mainrouter.post('/verify-token',jwtverify);
mainrouter.post('/login',login);
mainrouter.use('/user',jwtverify,userrouter);
mainrouter.post('/check',(req,res)=>{
    req.body.id=req.body.mssg;
    res.send(req.body.id);
})
export default mainrouter