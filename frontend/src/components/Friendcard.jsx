import { Link, useNavigate } from "react-router-dom";
import usericon from "./icon.webp"
export default function Friendcard({avatar='',friendname,friendid}){
    console.log("friendname")
    const navigate=useNavigate()
    return (
        <div onClick={()=>{navigate(`chatpage/${friendid}`)}} className="flex w-full h-12 rounded-sm  hover:bg-[#3a31d8]  border-box p-2 border-r border-gray-800 border-b hover:border-black ">
        <div className="flex items-center space-x-2">
            <img src={usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
            <h3 className="text-gray-400">{friendname}</h3>
        </div>   
    </div>
    )
}