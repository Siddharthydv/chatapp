import { Router } from "express";
export const grouprouter=Router()
import createGroup from "../controllers/groupcontrollers/createGroup.js";
import deleteGroup from "../controllers/groupcontrollers/deleteGroup.js";
import getGroups from "../controllers/groupcontrollers/getGroups.js";
import addMember from "../controllers/groupcontrollers/addMember.js";
import getMessages from "../controllers/groupcontrollers/getMessages.js";
import getMembers from "../controllers/groupcontrollers/getMembers.js";
import deleteMember from "../controllers/groupcontrollers/deleteMember.js";
grouprouter.post('/createGroup',createGroup)
grouprouter.delete('/deleteGroup',deleteGroup)
grouprouter.get('/getGroups',getGroups)
grouprouter.post('/addMember',addMember)
grouprouter.get('/getMessages/:groupId',getMessages)
grouprouter.get('/getMembers/:groupId',getMembers)
grouprouter.delete('/deleteMember/:groupId/:memberId',deleteMember)

