import { Router } from "express";
import  logout  from "../controllers/logout.js";
export const userrouter=Router();

userrouter.post('/logout',logout);



