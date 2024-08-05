import sendicon from "../assets/send.png"
import {ws} from "./home.jsx"
export default function Bottombar({friendid,setmessages}){
    async function sendmssg(){
        const mssg=document.getElementById('default-input').value;
        console.log(mssg);
        console.log(open)
        const message=({type:"message",
            recipientId:Number(`${friendid}`),
            content:mssg
        })
        ws.send(JSON.stringify(message))
    }
    return (
        <div className="bg-[#3E92CC] flex w-full h-1/6 rounded-md">
         <div className="flex mb-6 w-1/2">
            {/* <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label> */}
            <input type="text" id="default-input" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <img onClick={sendmssg} src={sendicon} className="w-12 h-12"></img>
         </div>
        </div>
    )
}