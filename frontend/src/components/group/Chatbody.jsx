import { useContext } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { Wscontext } from "../home";

export default  function Chatbody({mssg=[],setMssg}){
    // const userid=1
   
    const userid=useSelector(state=>state.userdetails.userId)
    
    // console.log(`userid=${userid}`)
    // console.log(mssg)
    return (
        (mssg.map((mssg)=>{
            const key=uuidv4();
            if(mssg.userId===userid)
                return(<div  key={mssg.id} name="dummymessages" className="flex flex-row-reverse w-full h-fit ">
                        <div name="messages" className=" w-fit max-w-48 rounded-sm  bg-[#3a31d8] break-words p-2 space-y-1">
                            <h6 className="text-sm font-sans font-black">{mssg.user.username}</h6>
                            <h6 className="text-gray-300 font-normal text-xs">{mssg.content}</h6>
                        </div>
                </div>
                )
            else 
            return(<div key={key}  name="dummymessages" className="e w-full h-fit ">
                    <div name="messages" className=" w-fit max-w-48 rounded-sm  bg-[#3a31d8] break-words p-2 space-y-1">
                            <h6 className="text-sm font-sans font-black">{mssg.user.username}</h6>
                            <h6 className="text-gray-300 font-normal text-xs">{mssg.content}</h6>
                    </div>
                 </div>)
        }))
       
    )
}