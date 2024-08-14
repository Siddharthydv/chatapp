import { Router } from "express";
export const grouprouter=Router()
import createGroup from "../controllers/groupcontrollers/createGroup.js";
import deleteGroup from "../controllers/groupcontrollers/deleteGroup.js";
import getGroups from "../controllers/groupcontrollers/getGroups.js";
import addMember from "../controllers/groupcontrollers/addMember.js";
import getMessages from "../controllers/groupcontrollers/getMessages.js";
grouprouter.post('/createGroup',createGroup)
grouprouter.delete('/deleteGroup',deleteGroup)
grouprouter.get('/getGroups/:groupId',getGroups)
grouprouter.post('/addMember',addMember)
grouprouter.get('/getMessages/:groupId',getMessages)


