import express from "express"
import http from "http"
import { WebSocketServer } from "ws";
import mainrouter from "./routes/mainrouter.js"
import cors from 'cors'
import cookieParser from "cookie-parser"
import acceptreq from "./controllers/acceptreq.js";
import webcheck from "./webcheck.js";
import jwt from "jsonwebtoken"
import { ParseStatus } from "zod";
import logout from "./controllers/logout.js";
import sendrequest from "./controllers/sendrequest.js";
import messagehandler from "./controllers/messagehandler.js";
import getmessages from "./controllers/getmessages.js";
const app=express();
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    // allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
    // exposedHeaders: ['Content-Length', 'X-Custom-Header'], // Expose custom headers
  }));
app.use(cookieParser())
app.use(express.json())
app.use("/",mainrouter)
const Server=http.createServer(app);
const wss=new WebSocketServer({server:Server});

wss.on('connection',(ws,req)=>{
    //verification
            // const token=req.headers.cookie['authToken']
            // console.log(token)
            // if(!token)
            //  ws.send("token absent")
            // try{
            // const result =jwt.verify(token,"secret");
            //  if(!result)
            //      res.send("Uncorrect token");
            //  console.log(jwt.decode(token))
            //  ws.userId=jwt.decode(token).userId;
            // }catch(error){ws.send('invalid token')}  
    
    //sockets 
    ws.on('message',(message)=>{
        const parsedmessage=JSON.parse(message);
        console.log(parsedmessage)
        if(parsedmessage.type==="logout")
        {
            logout(ws.userId=1).then((result)=>{
                 ws.close()});
           
        }
        if(parsedmessage.type==="sendrequest")
        {
            sendrequest(ws.userId,parsedmessage.requesteeId)
        }
        if(parsedmessage.type==="acceptreq")
            {
                acceptreq(parsedmessage.requestId);
            }
        if(parsedmessage.type==="message")
        {
            const recipientId=parsedmessage.recipientId;
            const content=parsedmessage.content;
            messagehandler(ws.userId,recipientId,content)
        }
            // webcheck(decmessage);
        // ws.send(decmessage.content)
    })
})


Server.listen(3000)


