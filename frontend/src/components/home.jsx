import { Outlet, useActionData } from "react-router-dom"
import Sidebar from "./sidebar"
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createContext } from "react"
import axios from 'axios'
import { update, userSlice } from "../store/userslice.js"
export const Wscontext=createContext();
export default function Home(){
    const Id=useSelector(state=>state.userdetails.userId)
    const name=useSelector(state=>state.userdetails.username)
    // console.log(Id)
    const dispatch=useDispatch();
    useEffect(()=>{
        async function getprofile(){
            const response=await axios.get('http://localhost:3000/user/profiledetails',{withCredentials:true})
            return response
        }
            
            getprofile().then((response)=>{
                dispatch(update({picurl:response.data.picurl,Status:response.data.Status}))
            });
    },[])
   const userdata=useSelector(state=>state.userdetails)
    console.log(userdata)
    const ws=new WebSocket('ws://localhost:3000')
    return (
        <Wscontext.Provider value={ws}>
        <div className='flex h-screen w-full bg-[#010104] border-2'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            {/* <img src={Bgsvg} className="flex flex-grow"/> */}
        </div>
        </Wscontext.Provider>
    )
}

