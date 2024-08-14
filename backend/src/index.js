import express from "express"
import http from "http"
import { WebSocketServer } from "ws";
import mainrouter from "./routes/mainrouter.js"
import cors from 'cors'
import cookieParser from "cookie-parser"
import acceptreq from "./controllers/acceptreq.js";
import webcheck from "./webcheck.js";
import jwt from "jsonwebtoken"
import logout from "./controllers/logout.js";
import sendrequest from "./controllers/sendrequest.js";
import messagehandler from "./controllers/messagehandler.js";
import getmessages from "./controllers/getmessages.js";
import groupmessageHandler from "./controllers/groupcontrollers/groupmessageHandler.js";
import prisma from "./prisma/prismaclient.js";


const app=express();
const allowedOrigins=['http://localhost:5173','http://localhost:5174']
app.use(cors({
    origin:function(origin,callback){
        if(allowedOrigins.indexOf(origin)!==-1)
            callback(null,true)
        else
            callback(new Error('not allowed by cors'))
    }, // Allow only this origin
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
const Hashmap=new Map();
const busymap=new Map(); 
wss.on('connection',(ws,req)=>{
    //verification
    let token;
    if(req.headers.cookie)
    token=(req.headers.cookie.split('='))[1]
        // console.log(token)
        if(!token){
         ws.send("token absent")
         ws.close()
        }
        try{
        const result =jwt.verify(token,"secret");
         
        //  console.log(jwt.decode(token))
         ws.userId=jwt.decode(token).userId;
        //  console.log(ws.userId)
        }catch(error){ws.send('invalid token')
            // console.log('reached')
        }
        Hashmap.set(ws.userId,ws);
            // console.log(`hasmap size=${Hashmap.size}`)
        wss.clients.forEach((client)=>{
            // console.log(client.userId)
            if(client.userId!==ws.userId)
            client.send(JSON.stringify({
                type:'onlinenotification',
                onlineuserId:ws.userId
            }))
        })

        ws.send(JSON.stringify({
            type:"status",
            busyuserIds:Array.from(busymap.keys())
        }))
       
        
    //sockets 
    ws.on('message',(message)=>{
        
          
        const parsedmessage=JSON.parse(message);
        console.log(parsedmessage)
        if(parsedmessage.type==="initialnotif")
        {
            // console.log(ws.userId)
            ws.send(JSON.stringify({
                type:"initialnotif",
                userIds:Array.from(Hashmap.keys())
            }))
            ws.send(JSON.stringify({
                type:"alreadybusy",
                busyuserIds:Array.from(busymap.keys())
            }))
            
        }
        if(parsedmessage.type==="logout")
        {
            logout(ws.userId);  
            Hashmap.delete(ws.userId)
            wss.clients.forEach((client)=>{
                // console.log(client.userId)
                if(client.userId!==ws.userId)
                client.send(JSON.stringify({
                    type:"offlinenotification",
                    offlineuserId:ws.userId
                }))
            })
           
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
            console.log(ws.userId)
            const recipientId=parsedmessage.recipientId;
            const content=parsedmessage.content;
            messagehandler(ws.userId,recipientId,content)
            parsedmessage.senderId=ws.userId
            ws.send(JSON.stringify(parsedmessage))
            const recipientws=Hashmap.get(recipientId)
            recipientws?.send(JSON.stringify(parsedmessage))
        }
        if(parsedmessage.type==='busy')
        {
            wss.clients.forEach((client)=>{
                // console.log(client.userId)
                if(client.userId!==ws.userId)
                client.send(JSON.stringify({
                    type:"busynotification",
                    busyuserId:ws.userId
                }))
            })
            busymap.set(ws.userId,ws)
        }
        if(parsedmessage.type==='notbusy')
            {
                wss.clients.forEach((client)=>{
                    // console.log(client.userId)
                    if(client.userId!==ws.userId)
                    client.send(JSON.stringify({
                        type:"nonbusynotification",
                        notbusyuserId:ws.userId
                    }))
                })
                busymap.delete(ws.userId)
            }
        if(parsedmessage.type=='groupmessage')
        {
            const userId=ws.userId;
            const groupId=parsedmessage.groupId;
            const content=parsedmessage.content
            groupmessageHandler({userId,groupId,content}).then((response)=>{
                    const groupMembers=async(groupId)=>{
                        const members=await prisma.groupMember.findMany({
                            where:{groupId:groupId},
                            select:{userId:true}
                        })
                        return members      //Array of objects containing userids  
                    }
                    groupMembers(groupId).then((res)=>{  //
                    
                        const groupmembers=res.map(user=>user.userId);
                        const onlinews=Array.from(Hashmap.keys());
                        const onlinemembers=onlinews.filter(id=>groupmembers.includes(id))
                        onlinemembers.forEach(userId=>{
                            Hashmap.get(userId).send(JSON.stringify({
                                type:"groupmessage",
                                content:response
                            }))
                        })
                    })
            })

            
            
        }
            // webcheck(decmessage);
        // ws.send(decmessage.content)
    })
})


Server.listen(3000)


