import { Link, Outlet } from "react-router-dom";
import Friendcard from "./Friendcard";
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios"
export default function Friendlist(){
    const[friendlist,setList]=useState()
    useEffect(()=>{
        const getlist=async()=>{
            const list=await axios.get('http://localhost:3000/user/getfriends',{withCredentials:true})
            setList(list.data);
          }
        getlist().then();
        
    },[])
    return friendlist?(
    <div  className="flex w-full " >
        <div className="flex flex-col h-full w-3/12 bg-neutral-950 border-r border-gray-600 border-box p-3 space-y-3">
            <div className="w-full h-7 border-b border-gray-800 border-box">
                <h4 className="text-gray-400">Friends</h4>
            </div>
            {<ul>
                {friendlist.map(item=> (<li key={item.friendid} ><Friendcard friendname={item.friendname} friendid={item.friendid}/></li> )) }      
            </ul> }
            
        </div>
        <Outlet/>
    </div>
    ):null
}
