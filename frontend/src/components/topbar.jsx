import { useContext } from "react";
import usericon from "./icon.webp"
import { Wscontext } from "./home";

export default function Topbar({name,imageurl,memberList,vanish,setVanish,friendid}){
    // console.log(imageurl)
    const ws=useContext(Wscontext)
    const initiatevanish=()=>{
        ws.send(JSON.stringify({
            type:'togglevanish',
            recipientId:friendid
        })
        )
    }
   
    return(
        <div name="namesection" className="flex h-16 border-b border-gray-600 ">
                <div className="flex w-2/3 h-full p-4  items-center space-x-2 border-box">
                    <img src={imageurl?imageurl:usericon} className="w-12 h-12 border rounded-full border-gray-800"></img>
                    <h1 className="text-gray-400 text-xl">{name}</h1>
                </div>
                <div className="flex flex-row-reverse  w-1/3 h-full p-4 items-center  space-x-reverse space-x-5" >
                    <div><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6 fill-red-500 hover:fill-red-800"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM472 200l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg></div>
                    <div><svg onClick={()=>{initiatevanish();setVanish(!vanish);}} className={`w-6 h-6  ${vanish?'hover:fill-blue-500':'hover:fill-red-800'} ${vanish?'fill-red-800':'fill-blue-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2L0 192C0 86 86 0 192 0S384 86 384 192l0 270.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg></div>
                </div>
            </div>
    )
}