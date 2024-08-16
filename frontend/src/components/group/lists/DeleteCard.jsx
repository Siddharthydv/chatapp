import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function DeleteCard({setDeleteCard,groupId}){
    const navigate=useNavigate();
    const deleteGroup=async()=>{
         axios.delete(`http://localhost:3000/user/group/deleteGroup/${groupId}`,{withCredentials:true}).
        then((res)=>{
            console.log(res)
            if(res)
            {
                navigate('../')
            }
        })
    }
    return(
        <div className="flex flex-col z-10 absolute border w-3/12 h-3/12 left-1/3 top-1/3 rounded-md justify-center text-gray-300 box-border p-1" >
            <div className="flex w-full h-20 justify-center items-center border-b">
                <h1 className="font-semibold font-sans text-xl">DELETE CONFIRMATION</h1>
            </div>
            <div className="flex w-full  h-20 items-center justify-center">
                <h1 className="font-semibold font-sans text-md">Do you really want to delete this group?</h1>
            </div>
            <div className="flex w-full  h-20 justify-center items-center space-x-4">
                <button onClick={()=>{setDeleteCard(prev=>!prev)}}className="border rounded-lg h-fit  text-base font-sans font-semibold">Cancel</button>
                <button onClick={deleteGroup}className="border rounded-lg h-fit  text-base font-sans font-semibold hover:text-neutral-950 hover:bg-red-600">Delete</button>
            </div>
        </div>
    )
}