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
  const [avatar,setavatar]=useState();
  const [messages,setmessages]=useState([]);
  const [vanish,setVanish]=useState(false);
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


    useEffect(()=>{
      const getuser=async()=>{
        return await axios.get(`http://localhost:3000/user/getuser/${friendid}`,{withCredentials:true})
      }
      getuser().then((res)=>{
        console.log(res)
        setavatar(res.data.picurl)})
    },[friendid])
   
   
    const ws=useContext(Wscontext)
    ws.onmessage=(event)=>{
      const message=JSON.parse(event.data);
      // console.log(message)
      if(message.type==='message')
        setmessages((prev)=>[...prev,message])
      // console.log(messages)
      else if(message.type==="togglevanish")
      {
        setVanish(!vanish)
        
        setmessages((prev)=>[...prev,message])
      }
    }
    useEffect(()=>{
      scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
    },[messages])
    return messages? (
        <div className="flex flex-col flex-grow h-full bg-neutral-950 border-box p-2">
          <Topbar name={friendname} imageurl={avatar} vanish={vanish} setVanish={setVanish} friendid={friendid}/>
        <div name="chatpart" ref={scrollRef} className="flex flex-col flex-grow box-border p-4 space-y-3 overflow-y-scroll ">  
          <Userchat mssg={messages} vanish={vanish}/>
        </div>
        <Bottombar setmessages={setmessages} friendid={friendid} vanish={vanish}/>
        </div>
    ):null
}