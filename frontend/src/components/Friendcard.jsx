import { Link, useNavigate } from "react-router-dom";
import usericon from "./icon.webp"
import { useContext, useEffect } from "react";
import { Wscontext } from "./home";
import { useState } from "react";
export default function Friendcard({avatar='',friendname,friendid,alreadyonline}){
    const[onlineId,setOnlineId]=useState(alreadyonline);
    // console.log(alreadyonline)
    const ws=useContext(Wscontext)
    // console.log(ws)
    useEffect(()=>{
            // ws.send(JSON.stringify({
            //     type:"initialnotif",
            // }))
            // Define the message handler
            const handleMessage = (event) => {
                const message = JSON.parse(event.data);
                if (message.type === 'onlinenotification') {
                    setOnlineId((prev) => [...new Set([...prev, message.onlineuserId])]);
                }
                else if(message.type==="offlinenotification"){
                    console.log(`ye=${onlineId}`)
                    setOnlineId((prev)=>prev.filter(id => id !== message.offlineuserId));
                }
                // else if(message.type==='initialnotif'){
                //     console.log(message.userIds)
                // }
            };
            ws.addEventListener('message', handleMessage);

            // Cleanup the event handler when the component unmounts
            return () => {
                ws.removeEventListener('message', handleMessage);
            };
    },[])
    
    const online=(friendid)=>{
        // console.log("online")
        if(onlineId.indexOf(friendid)!==-1)
            return true;
        return false;
        console.log(...onlineId)
    }
    const navigate=useNavigate()
    return (
        <div onClick={()=>{navigate(`chatpage/${friendid}/${friendname}`)}} className="flex w-full h-12 rounded-sm  hover:bg-[#3a31d8]  border-box p-2 border-r border-gray-800 border-b hover:border-black ">
        <div className="flex items-center space-x-2">
            <img src={usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
            <h3 className="text-gray-400">{friendname}</h3>
            {online(friendid) && <p className="text-white">online</p> }
        </div>   
    </div>
    )
}