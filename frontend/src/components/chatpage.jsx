import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import Userchat from "./userchat";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
import chatbg from '../assets/chatpagebg.svg'
import { useSelector } from "react-redux";
import { Wscontext } from "./home";
// import {ws} from "./home.jsx"
export default function Chatpage(){
  const {friendid,friendname}=useParams();
  const [messages,setmessages]=useState([]);
  const scrollRef=useRef();
  useEffect(()=>{
     
      const getmssg=async()=>{
        console.log("hi")
       return await axios.get(`http://localhost:3000/user/getmessages/${friendid}`,{withCredentials:true})
      }
      getmssg().then((mssg)=>{console.log(mssg)
        setmessages(mssg.data)
      })
    },[friendid])
   const ws=useContext(Wscontext)
    ws.onmessage=(event)=>{
      const message=JSON.parse(event.data);
      // console.log(message)
      if(message.type==='message')
        setmessages((prev)=>[...prev,message])
      // console.log(messages)
    }
    useEffect(()=>{
      scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
    },[messages])
    return messages? (
        <div className="flex flex-col flex-grow h-full bg-neutral-950 border-box p-2">
          <Topbar name={friendname}/>
        <div name="chatpart" ref={scrollRef} className="flex flex-col flex-grow box-border p-4 space-y-3 overflow-y-scroll ">  
          <Userchat mssg={messages}/>
        </div>
        <Bottombar setmessages={setmessages} friendid={friendid}/>
        </div>
    ):null
}