import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { update } from "../store/userslice.js";
// import {ws} from './home.jsx'
import { Wscontext } from "./home.jsx";
import { useContext } from "react";
import Togglebutton from "./Togglebutton.jsx";
export default function Sidebar()
{
  const navigate=useNavigate();
  const dispatch=useDispatch();
 const ws=useContext(Wscontext);
 const picurl=useSelector(state=>state.userdetails.picurl)
  // const userId=useSelector(state=>state.userdetails.userId)
  const logout=async ()=>{
    // const ws=new WebSocket('ws://localhost:3000');
   
      console.log('open');
      const message=JSON.stringify({type:"logout"})
      ws.send(message)
      const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = "authToken"+`=;${expires}`;
      console.log(document.cookie)
      dispatch(update({userId:"",username:''}))
      navigate('../login')
    
  }
  const friendlist=async()=>{
    const list=await axios.get('http://localhost:3000/user/getfriends',{withCredentials:true})
    console.log((list))
  }
   return  ( <div className="flex flex-col  h-full bg-neutral-950 w-24 text-white box-border pt-2 space-y-8 border-r border-gray-800">
    <div name="usericon"className="flex w-full h-20 justify-center hover:bg-[#3a31d8] rounded-sm fill-black overflow-visible">
    <Link to='profile'><img  src={picurl} className="border rounded-full h-16 w-16"/></Link>  
    </div> 
    <Link to='search'><div name="search" className="flex w-full justify-center hover:bg-[#3a31d8] rounded-sm fill-black p-2 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-gray-700 hover:fill-black"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div></Link>
    <Link to='requests'><div name="notifications" className="flex w-full justify-center hover:bg-[#3a31d8] rounded-sm hover: fill-black p-2 "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-gray-700 " ><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/></svg></div></Link>
    <Link to='friends'><div name="chats" className="flex w-full justify-center hover:bg-[#3a31d8] rounded-sm fill-black p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-gray-700 hover:fill-black"><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg></div></Link>
    <Link to='groups'><div name="chats" className="flex w-full justify-center hover:bg-[#3a31d8] rounded-sm fill-black p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5 fill-gray-700 hover:fill-black"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg></div></Link>
    <div name='busynotification' className="flex w-full justify-center hover:bg-[#3a31d8] rounded-sm fill-black p-2"><Togglebutton/></div>
    <div onClick={logout} className="flex flex-grow flex-col-reverse w-full pb-4 rounded-sm fill-black ">
            <div className="flex justify-center hover:bg-[#3a31d8] p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-gray-800 hover:fill-black"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
            </div>
        </div>

</div>)
}