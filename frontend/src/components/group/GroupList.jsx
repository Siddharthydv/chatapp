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
            setList(prev=>[...prev,{group:response.data}])
        })
    }
    return groupList?(
        <div  className="flex w-full " >
            <div className="flex flex-col h-full w-3/12 bg-neutral-950 border-r border-gray-600 border-box p-3 space-y-3">
                <div className="w-full h-7 border-b border-gray-800 border-box">
                    <h4 className="text-gray-400">Groups</h4>
                </div>
                <div  name='searchbar' className="flex space-x-2 items-center ">
                    <input id='addgroup' className="border rounded-sm border-gray-400 bg-gray-900 w-30 h-10 text-gray-300 p-2"></input>
                    <svg name='arrow'  xmlns="http://www.w3.org/2000/svg" onClick={createGroup} viewBox="0 0 448 512" className="w-7 h-7 fill-slate-300 hover:fill-[#3a31d8] "><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
                {<ul>
                        {groupList.map(item=><Groupcard key={item.group.id} groupname={item.group.name} groupid={item.group.id} />)}
                </ul> }
                
            </div>
            <Outlet/>
        </div>
        ):null
}