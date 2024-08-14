import { useSelector } from "react-redux";
import sendicon from "../assets/send.png"
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import { Wscontext } from "./home.jsx";
import { useContext,useState } from "react";
import emojicon from "../assets/emoji.svg"
export default function Bottombar({friendid,setmessages}){
    const[showPicker,setPicker]=useState(false);
    const ws=useContext(Wscontext)
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
    const togglepicker=()=>{
        setPicker(!showPicker)
    }
    return (
    <div name="inputbox" className="flex w-full h-16 border-t border-gray-600 justify-center items-center space-x-3 box-border ">
        {/* <Picker onSelect={emoji => console.log(emoji.native)}></Picker> */}
        <div className="h-10 w-10 box-border">{showPicker &&<Picker data={data} className="h-2 w-2 mb-20" style={{ height: '200px', width: '400px' }} />}</div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={togglepicker} className="w-5 h-5 fill-slate-200 hover:fill-black hover:bg-[#3a31d8]"  viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        <input id='default-input' className="bg-neutral-950 border border-gray-500 text-gray-300 text-sm h-2/3 w-2/3 rounded-sm p-2"></input>
        <svg onClick={sendmssg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 border fill-gray-600 p-2 hover:fill-black hover:bg-[#3a31d8]"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
    </div>
    )
}