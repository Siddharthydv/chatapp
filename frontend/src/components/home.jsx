import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Bgsvg from "../assets/bg.svg"
export default function Home(){
    return (
        <div className=" flex h-screen border-2 border-black bg-cover bg-center" style={{backgroundImage:`url(${Bgsvg})`}}>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            {/* <img src={Bgsvg} className="flex flex-grow"/> */}
        </div>
    )
}