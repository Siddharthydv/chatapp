import { useEffect, useState } from "react"
import axios from "axios"
import {ws} from "./home.jsx"
export default function Requests(){
    const [requests,setRequests]=useState();
    useEffect(()=>{
        const getreq=async ()=>{
        const result=(await axios.get(`http://localhost:3000/user/receivedrequest`,{withCredentials:true})).data;
        return result ;
    }
    getreq().then((result)=>{setRequests(result)})
    },[])
    const acceptreq=(requestid)=>{
        ws.send(JSON.stringify({
            type:"acceptreq",
            requestId:requestid
        }))
    }
    return requests?( <div className="flex flex-col h-full w-1/5 bg-slate-50 rounded-md border-2  box-border p-1 space-y-1 overflow-scroll" >
        {requests.map((req)=>{
            return(
            <div key={req.requestid}><div  className="w-full h-12 bg-blue-400">
                {req.username}
            </div>
            <button onClick={()=>{acceptreq(req.requestid)}}>accept</button>
            </div>)
        })}
    </div>
    ):null
}