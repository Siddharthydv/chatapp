import { Link, Outlet } from "react-router-dom";
import Friendcard from "./Friendcard";
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Wscontext } from "./home.jsx";
import { OPEN } from "ws";
export default function Friendlist(){
    const ws=useContext(Wscontext)
    const[friendlist,setList]=useState()
    const [alreadyonline,setonline]=useState();
        useEffect(()=>{
        const getlist=async()=>{
            const list=await axios.get('http://localhost:3000/user/getfriends',{withCredentials:true})
            setList(list.data);
          }
          getlist();
    },[])
    console.log(friendlist)
    useEffect(()=>{
        if(ws.readyState===WebSocket.OPEN)
        ws.send(JSON.stringify({
            type:"initialnotif"
        }))
        const handler=(event)=>{
            const message=JSON.parse(event.data)
            if(message.type==='initialnotif'){
                console.log(`mssids=${message.userIds}`)
                setonline(message.userIds)
            }
        }
        ws.addEventListener('message',handler);
        return () => {
            ws.removeEventListener('message', handler)};
    },[ws])
  
    return friendlist?(
    <div  className="flex w-full " >
        <div className="flex flex-col h-full w-3/12 bg-neutral-950 border-r border-gray-600 border-box p-3 space-y-3">
            <div className="w-full h-7 border-b border-gray-800 border-box">
                <h4 className="text-gray-400">Friends</h4>
            </div>
            {<ul>
                {friendlist.map(item=> (<li key={item.friendid} ><Friendcard avatar={item.picurl} friendname={item.friendname} friendid={item.friendid} alreadyonline={alreadyonline}/></li> )) }      
            </ul> }
            
        </div>
        <Outlet/>
    </div>
    ):null
}
