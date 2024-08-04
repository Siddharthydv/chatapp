import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import Userchat from "./userchat";
import Topbar from "./topbar";
import Bottombar from "./bottombar";
export default function Chatpage(){
  const {friendid}=useParams();
  const [messages,setmessages]=useState();
  useEffect(()=>{
      const getmssg=async()=>{
       return await axios.get(`http://localhost:3000/user/getmessages/${friendid}`,{withCredentials:true})
      }
      getmssg().then((mssg)=>{console.log(mssg)
        setmessages(mssg.data)
      })
    },[])
    return messages? (
      <div className="flex flex-grow bg-orange-500 h-full rounded-md"><Link to='../'></Link>
        <div className="bg-slate-900 flex flex-col flex-grow box-border space-y-1 ">
          <Topbar/>
          <div className="flex flex-col bg-slate-400 h-full w-full overflow-y-scroll">
       <Userchat messages={messages}/>
       </div>
        <Bottombar/>
        </div>
      </div>
    
    ):null
}