import { useEffect, useState } from "react"
import axios from "axios"
import Addmember from "./Addmember.jsx";
export default function MemberList({groupId}){
    const [List,setList]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/group/getMembers/${groupId}`,{withCredentials:true}).
        then(response=>{
            // console.log(response)
            setList(response.data)
        })
    },[groupId])
    const removeMember=(groupId,memberId)=>{
        axios.delete(`http://localhost:3000/user/group/deleteMember/${groupId}/${memberId}`,{withCredentials:true}).
        then((response)=>{console.log(response)})
    }
  
    return List?(
        <div className="flex flex-col justify-between w-1/3 h-full absolute top-0 right-0 border-l z-50 box-border p-2 ">
            <ul className="space-y-1">
                {List.map(item=>{return(
                    <div key={item.user.id} className=" flex w-full h-12 border items-center justify-between">
                        <div className="border">
                            <h1 className="text-white">{item.user.username}</h1>
                        </div>
                        <svg onClick={()=>{removeMember(groupId,item.user.id)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-red-500 hover:fill-red-800"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM472 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                    </div>
                )})}
            </ul>
            <Addmember groupId={groupId}/>
        </div>
    ):null
}