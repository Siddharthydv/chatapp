import { useEffect, useState } from "react";
import axios from "axios"
import usericon from '../../icon.webp'
export default function Addmember({groupId}){
    const[user,setuser]=useState()
    const getUser=async()=>{
        const username=document.getElementById('user').value;
         axios.get(`http://localhost:3000/user/search/${username}`,{withCredentials:true}).
        then((response)=>{
            // console.log(response)
            setuser(response.data)
        })
    }
    const addmember=async()=>{
        axios.post('http://localhost:3000/user/group/addMember',{
            groupId:groupId,
            memberId:user.id,
        },{withCredentials:true}).
        then((response)=>{})
    }
    return(
        <div name="addmemberdiv" className="border w-full h-1/6 box-border text-slate-300 font-md font-sans font-semibold space-y-1">
                <h1 className="border-b">AddMember</h1>
                <div className="flex border w-full h-fit box-border space-x-3 items-center">
                    <input type="text" id="user" className="h-7 bg-gray-900 border"></input>
                    <svg onClick={getUser} className="w-4 h-4 fill-slate-300 hover:fill-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>
                {user && 
                    <div className="flex flex-grow w-full border justify-between items-center">
                        <div className="flex justify-center items-center space-x-1">
                            <img src={user.picurl||usericon} className="w-10 h-10"/>
                            <h1>{user.username}</h1>
                        </div>
                        <svg onClick={addmember} className="w-5 h-5 fill-green-600 hover:fill-green-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                    </div>}
            </div>
    )
}