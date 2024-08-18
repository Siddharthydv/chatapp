import { useContext, useEffect, useState } from "react"
import axios from "axios"
// import {ws} from "./home.jsx"
import usericon from './icon.webp'
import { Wscontext } from "./home";
import Reqcard from "./reqcard.jsx";
export default function Requests(){
    const [requests,setRequests]=useState();
    const ws=useContext(Wscontext)
    useEffect(()=>{
        const getreq=async ()=>{
        const result=(await axios.get(`http://localhost:3000/user/receivedrequest`,{withCredentials:true})).data;
        return result ;
    }
    getreq().then((result)=>{setRequests(result)
        console.log(result)
    })
    },[])
   
    return requests?( <div className="flex flex-col h-full w-1/5 bg-neutral-950   box-border p-1 space-y-1 overflow-scroll" >
        {requests.map((req)=>{
            return(
                <Reqcard req={req}/>
               )
        })}
    </div>
    ):null
}