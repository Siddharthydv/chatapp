import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Bgsvg from "../assets/bg.svg"
import { useSelector } from "react-redux"
export default function Home(){
    const userdata=useSelector(state=>state.userdetails)
    // console.log(userdata)
    // console.log(useSelector(state=>state.authStatus)
    // console.log(userdata)
    return (
        <div className=" flex h-screen border-2 border-black bg-cover bg-center" style={{backgroundImage:`url(${Bgsvg})`}}>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            {/* <img src={Bgsvg} className="flex flex-grow"/> */}
        </div>
    )
}

export const ws=new WebSocket('ws://localhost:3000');
