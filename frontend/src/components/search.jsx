import { useState } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Searchcard from "./searchcard";
export default function Search(){
    const [people,setpeople]=useState();
    const search=async ()=>{
        const name=document.getElementById('search').value
        const result =await axios.get(`http://localhost:3000/user/search/${name}`,{withCredentials:true})
        const data=result.data
        setpeople(data)
        
    }
    return (
        <div className="flex flex-col h-full w-30 bg-neutral-950 border-r border-gray-600 border-box p-3 space-y-3">
            <div  className="flex w-full h-7 border-b border-gray-800 border-box">
                <h1 className="text-gray-400">Search Users</h1>
            </div> 

            <div  name='searchbar' className="flex space-x-2 items-center ">
                <input id='search' className="border rounded-sm border-gray-400 bg-gray-900 w-30 h-10 text-gray-300 p-2"></input>
                <svg name='arrow'  xmlns="http://www.w3.org/2000/svg" onClick={search} viewBox="0 0 448 512" className="w-7 h-7 fill-slate-300 hover:fill-[#3a31d8] "><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </div>
            {people &&   
                <ul>
                    <li key={people.id}>
                        <Searchcard name={people.username} id={people.id}/>
                    </li>
                </ul>}
        </div>

    )
}

// {people &&   <ul>
//     <li key={people.id}>
//         <Searchcard name={people.username} id={people.id}/>
//     </li>
// </ul>}