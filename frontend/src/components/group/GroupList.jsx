import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import axios from "axios"
import { Outlet } from "react-router-dom";
import Groupcard from "./Groupcard.jsx";
export default function GroupList(){
    const[groupList,setList]=useState();
    useEffect(()=>{
        const getgroups=async()=>{
        const response=await axios.get('http://localhost:3000/user/group/getGroups',{withCredentials:true})
        return response;
        }
        getgroups().then((response)=>{
            console.log(response)
            setList(response.data)})
    },[])

    const createGroup=async()=>{
        const groupname=document.getElementById('addgroup').value;
        console.log(groupname)
        axios.post('http://localhost:3000/user/group/createGroup',{name:groupname},{withCredentials:true})
        .then(response=>{
            console.log(response)
            setList(prev=>[...prev,{group:response.data }])
        })
    }
    return groupList?(
        <div  className="flex w-full " >
            <div className="flex flex-col h-full w-3/12 bg-neutral-950 border-r border-gray-600 border-box p-3 space-y-3">
                <div className="w-full h-7 border-b border-gray-800 border-box">
                    <h4 className="text-gray-400">Groups</h4>
                </div>
                <div  name='searchbar' className="flex space-x-2 items-center w-full">
                    <input id='addgroup' className="border rounded-sm border-gray-400 bg-gray-900 w-3/4 h-2/3 text-gray-300 p-2"></input>
                    <svg onClick={createGroup} className="w-5 h-5 fill-slate-300 hover:fill-[#3a31d8]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                </div>
                {<ul>
                        {groupList.map(item=><Groupcard key={item.group.id} groupname={item.group.name} groupid={item.group.id} />)}
                </ul> }
                
            </div>
            <Outlet/>
        </div>
        ):null
}