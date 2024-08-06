import {useSelector} from "react-redux"
import { v4 as uuidv4 } from 'uuid';
export default  function Userchat({mssg=[]}){
    const userid=1
    console.log(`userid=${userid}`)
    console.log(mssg)
    return (
        (mssg.map((mssg)=>{
            const key=uuidv4();
            if(mssg.senderId===userid)
                return(<div  key={key} name="dummymessages" className="w-full h-fit ">
                    <div name="messages" className=" w-fit max-w-48 rounded-sm  bg-[#3a31d8] break-words p-2">
                    <h6 className="text-gray-300 font-normal text-xs">{mssg.content}</h6>
                    </div>
                </div>
                )
            else 
            return(<div  key={key} name="dummymessages" className="flex flex-row-reverse w-full h-fit ">
                <div name="messages" className=" w-fit max-w-48 rounded-sm  bg-[#3a31d8] break-words p-2">
                <h6 className="text-gray-300 font-normal text-xs">{mssg.content}</h6>
                </div>
            </div>)
        }))
       
    )
}