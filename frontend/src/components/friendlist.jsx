import { Link, Outlet } from "react-router-dom";
import Mssgcard from "./Mssgcard";
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Friendlist(){
    const[friendlist,setList]=useState([])
    useEffect(()=>{
        const friendlist=async()=>{
            const list=await axios.get('http://localhost:3000/user/getfriends',{withCredentials:true})
            setList(list);
          }
        friendlist();
    },[])
    return(
    <div  className="flex w-full " >
        <div className=" h-full w-1/5 bg-slate-50 rounded-md  box-border p-1 space-y-1 overflow-scroll" >
            {/* <Link to='chatpage'><button>clickme</button></Link>
            <Link to='./'><button>goback</button></Link> */}
            {friendlist.map(item=> (<Link to='chatpage'><Mssgcard/></Link>)) }      
        </div>
        <Outlet/>
    </div>
    )
}