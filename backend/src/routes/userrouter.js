import { Router } from "express";
import  logout  from "../controllers/logout.js";
import getfriends from "../controllers/getfriends.js";
import sendrequest from "../controllers/sendrequest.js";
import receivedrequest from "../controllers/receivedrequest.js";
import acceptreq from "../controllers/acceptreq.js";
import rejectreq from "../controllers/rejectreq.js";
import search from "../controllers/search.js";
import getmessages from "../controllers/getmessages.js";
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

