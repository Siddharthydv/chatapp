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
                return( <div key={key} className="flex flex-col w-full box-border p-2">
                    <div className="bg-blue-200 w-1/3 min-w-fit box-border overflow-hidden break-words rounded-md font-neutral-300">
                    {mssg.content}</div>
                </div>
                )
            else 
            return(<div key={key}  className="flex flex-row-reverse border-2 w-full box-border p-2">
                <div className="bg-blue-300 w-1/3 box-border overflow-hidden break-words rounded-md font-sans font-neutral-300 justify-center items-center">
                {mssg.content}</div>
            </div>)
        }))
       
    )
}