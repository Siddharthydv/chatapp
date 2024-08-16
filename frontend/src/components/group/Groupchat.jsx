import { useParams } from "react-router-dom"
import Topbar from "./Topbar.jsx";
import Bottombar from '../bottombar.jsx'
import { useContext, useEffect, useState } from "react";
import MemberList from "./lists/MemberList.jsx";
import Chatbody from "./Chatbody.jsx";
import axios from "axios"
import { Wscontext } from "../home.jsx";
import Groupbottombar from "./groupbottombar.jsx";
import { useRef } from "react";
import DeleteCard from "./lists/DeleteCard.jsx";
export default function Groupchat(){
    const {groupid,groupname}=useParams();
    // const [groupId,setgroupId]=useState(groupid)
    const[isListVisible,setListVisibilty]=useState(false);
    const[isDeleteVisible,setDeleteCard]=useState(false);
    const[mssg,setMssg]=useState();
    const ws=useContext(Wscontext);
    const scrollRef=useRef();
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/group/getMessages/${groupid}`,{withCredentials:true}).
        then((response)=>{
            // console.log(response.data)
        setMssg(response.data)})
    },[groupid])
    ws.onmessage=(event)=>{
        // console.log(event)
        const message=JSON.parse(event.data)
        if(message.type==="groupmessage")
        {
            setMssg(prev=>[...prev,message]);
        }
    }
    useEffect(()=>{
        scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
      },[mssg])
    // console.log(isListVisible)
    return(
        (
            <div className="flex flex-col flex-grow h-full bg-neutral-950 border-box p-2 relative">
                <Topbar name={groupname} memberList={setListVisibilty} setDeleteCard={setDeleteCard}/>
                
                     {isListVisible && <MemberList groupId={groupid} setListVisibilty={setListVisibilty}/>}
                     {isDeleteVisible && <DeleteCard setDeleteCard={setDeleteCard} groupId={groupid}/>}
                
                <div name="chatpart" ref={scrollRef}  className="flex flex-col flex-grow box-border p-4 space-y-3 overflow-y-scroll relative ">  
                    
                    <Chatbody mssg={mssg} setMssg={setMssg}/>
                </div>
                <Groupbottombar  groupId={groupid}/>
            </div>
        )
    )
}