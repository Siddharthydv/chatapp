import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import Userchat from "./userchat";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
import chatbg from '../assets/chatpagebg.svg'
import {ws} from "./home.jsx"
export default function Chatpage(){
  const {friendid}=useParams();
  const [messages,setmessages]=useState([]);
  useEffect(()=>{
      const getmssg=async()=>{
       return await axios.get(`http://localhost:3000/user/getmessages/${friendid}`,{withCredentials:true})
      }
      getmssg().then((mssg)=>{console.log(mssg)
        setmessages(mssg.data)
      })
    },[])
    ws.onmessage=(event)=>{
      const message=JSON.parse(event.data);
      // console.log(message)
      if(message.type==='message')
        setmessages((prev)=>[...prev,message])
      // console.log(messages)
    }
    return messages? (
      <div className="flex flex-grow  h-full rounded-md"><Link to='../'></Link>
        <div className=" flex flex-col flex-grow box-border space-y-1 ">
          <Topbar/>
          <div className="flex flex-col  h-full w-full overflow-y-scroll bg-cover bg-black" style={{backgroundImage:`url(${chatbg})`}}>
       <Userchat mssg={messages}/>
       </div>
        <Bottombar setmessages={setmessages} friendid={friendid}/>
        </div>
      </div>
    
    ):null
}