import { Router } from "express";
import  logout  from "../controllers/logout.js";
import getfriends from "../controllers/getfriends.js";
import sendrequest from "../controllers/sendrequest.js";
import receivedrequest from "../controllers/receivedrequest.js";
import acceptreq from "../controllers/acceptreq.js";
import rejectreq from "../controllers/rejectreq.js";
import search from "../controllers/search.js";
import getmessages from "../controllers/getmessages.js";
import profiledetails from "../controllers/profiledetails.js";
import { upload } from "../middlewares/multer.js";
import uploadimage from "../controllers/uploadimage.js";
export const userrouter=Router();
userrouter.post('/check',(req,res)=>{res.send("check")})
// userrouter.post('/logout',logout);
userrouter.get('/search/:name',search);
userrouter.get('/getfriends',getfriends);
// userrouter.post('/sendrequest',sendrequest);
userrouter.get('/receivedrequest',receivedrequest);
// userrouter.post('/acceptreq',acceptreq);
userrouter.post('rejectreq',rejectreq);
userrouter.get('/getmessages/:friendid',getmessages)
userrouter.get('/profiledetails',profiledetails)
userrouter.put('/upload',(req,res,next)=>{
    req.user=req.body.id;next();
},upload.single('profile-pic'),uploadimage)

