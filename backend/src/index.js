import express from "express"
import http from "http"
import { WebSocketServer } from "ws";
import mainrouter from "./routes/mainrouter.js"
import cors from 'cors'
import cookieparser from "cookie-parser"
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
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials (cookies, authorization headers)
    exposedHeaders: ['Content-Length', 'X-Custom-Header'], // Expose custom headers
    maxAge: 86400 // Cache preflight responses for 1 day
  }));
app.use(cookieparser())
app.use(express.json())
app.use("/",mainrouter)
const Server=http.createServer(app);
const wss=new WebSocketServer({server:Server});

wss.on('connection',(ws,req)=>{
            // const token=req.cookies['Cookie_1']
            // if(!token)
            //  ws.send("token absent")
        
            // const result =jwt.verify(token,"secret");
            //  if(!result)
            //      res.send("Uncorrect token");
            //  console.log(jwt.decode(token))
            //  ws.userId=jwt.decode(token).userId;

        ws.userId=3;
    ws.on('message',(message)=>{
        const parsedmessage=JSON.parse(message);

        if(parsedmessage.type==="logout")
        {
           const result= logout(ws.userId);
           ws.send(result);
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
        if(parsedmessage.type==="getmessages")
        {
            const user2_id=parsedmessage.user2_id;
            getmessages(ws.userId,user2_id).then((docs)=>{
                ws.send(docs[0].content);
            })
        //     const docs=JSON.stringify(getmessages(ws.userId,user2_id))
        //     console.log(check)
        //    ws.send(docs)
        }
            // webcheck(decmessage);
        // ws.send(decmessage.content)
    })
})


Server.listen(3000)


