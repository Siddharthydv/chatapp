import { useParams } from "react-router-dom"
import Topbar from "../topbar";
import Bottombar from '../bottombar.jsx'
import { useState } from "react";
import MemberList from "./lists/MemberList.jsx";
export default function Groupchat(){
    const {groupid,groupname}=useParams();
    // const [groupId,setgroupId]=useState(groupid)
    const[isListVisible,setList]=useState(false);
    console.log(isListVisible)
    return(
        (
            <div className="flex flex-col flex-grow h-full bg-neutral-950 border-box p-2">
              <Topbar name={groupname} memberList={setList} />
             
            <div name="chatpart"  className="flex flex-col flex-grow box-border p-4 space-y-3 overflow-y-scroll relative ">  
            {isListVisible && <MemberList groupId={groupid}/>}
              {/* <Userchat mssg={messages}/> */}
              <div   name="dummymessages" className="w-full h-fit ">
                    
                    <div name="messages" className=" w-fit max-w-48 rounded-sm  bg-[#3a31d8] break-words p-2 space-y-1">
                    <h6 className="text-sm font-sans font-black">siddharth</h6>
                    <h6 className="text-gray-300 font-normal text-xs">wwwwwwwwwwwwwwwwwwww</h6>
                    </div>
                </div>
            </div>
            <Bottombar  friendid={groupid}/>
            </div>
        )
    )
}