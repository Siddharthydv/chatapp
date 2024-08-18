import { Router } from "express";
import getfriends from "../controllers/getfriends.js";
import receivedrequest from "../controllers/receivedrequest.js";
import rejectreq from "../controllers/rejectreq.js";
import search from "../controllers/search.js";
import getmessages from "../controllers/getmessages.js";
import profiledetails from "../controllers/profiledetails.js";
import { upload } from "../middlewares/multer.js";
import uploadimage from "../controllers/uploadimage.js";
import getuser from "../controllers/getuser.js";
import { grouprouter } from "./grouprouter.js";
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
userrouter.get('/getuser/:friendid',getuser)
// userrouter.post('/translate',translateText)

userrouter.use('/group',grouprouter)

