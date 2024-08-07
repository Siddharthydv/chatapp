import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createContext } from "react"
export const Wscontext=createContext();
export default function Home(){
    const userdata=useSelector(state=>state.userdetails)
    
    // console.log(userdata)
    // console.log(useSelector(state=>state.authStatus)
    // console.log(userdata)
    const dispatch=useDispatch();
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

