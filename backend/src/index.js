import express from "express"
import http from "http"
import { WebSocketServer } from "ws";
import mainrouter from "./routes/mainrouter.js"
import cors from 'cors'
import cookieparser from "cookie-parser"
const app=express();
app.use(cors({
    origin: '*', // Allow only this origin
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

wss.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        ws.send(message.toString());
    })
})


Server.listen(3000)


