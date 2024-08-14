import { useNavigate } from "react-router-dom"
import usericon from "../icon.webp"

export default function Groupcard({groupname,groupid}){
    const navigate=useNavigate();
    return(
        <div onClick={()=>{navigate(`groupchat/${groupid}/${groupname}`)}} className="flex w-full h-12 rounded-sm  hover:bg-[#3a31d8]  border-box p-2 border-r border-gray-800 border-b hover:border-black ">
        <div className="flex items-center space-x-2 w-3/4">
            <img src={usericon} className="w-7 h-7 border rounded-full border-gray-800"></img>
            <h3 className="text-gray-400">{groupname}</h3>
        </div>   
    </div>
    )
}