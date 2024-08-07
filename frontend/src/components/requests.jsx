import { useContext, useEffect, useState } from "react"
import axios from "axios"
// import {ws} from "./home.jsx"
import usericon from './icon.webp'
import { Wscontext } from "./home";
export default function Requests(){
    const [requests,setRequests]=useState();
    useEffect(()=>{
        const getreq=async ()=>{
        const result=(await axios.get(`http://localhost:3000/user/receivedrequest`,{withCredentials:true})).data;
        return result ;
    }
    getreq().then((result)=>{setRequests(result)
        console.log(result)
    })
    },[])
    const acceptreq=(requestid)=>{
        const ws=useContext(Wscontext)
        ws.send(JSON.stringify({
            type:"acceptreq",
            requestId:requestid
        }))
    }
    return requests?( <div className="flex flex-col h-full w-1/5 bg-neutral-950   box-border p-1 space-y-1 overflow-scroll" >
        {requests.map((req)=>{
            return(
                <div key={req.requestid} name="searchcard" className="flex w-full h-12 rounded-sm  hover:bg-[#3a31d8]  border-box p-2 border-r border-gray-800 border-b hover:border-black ">
                <div className="flex items-center space-x-2">
                    <img src={usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
                    <h3 className="text-gray-400">{req.username}</h3>
                </div>   
                <div className="flex flex-row-reverse flex-grow items-center">
                     <svg onClick={()=>{acceptreq(req.requestid)}} xmlns="http://www.w3.org/2000/svg" className="fill-slate-300  w-4 h-4 hover:fill-neutral-950" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                </div>
            </div>)
        })}
    </div>
    ):null
}