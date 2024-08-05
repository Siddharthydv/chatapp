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
        <div  className="flex w-full border-2 " >
        <div className=" h-full w-1/5 bg-slate-50 rounded-md  box-border p-1 space-y-1 overflow-scroll" >
            <input id="search" className="border-2" ></input>
            <button onClick={search}>search</button>
         {people &&   <ul>
                <li key={people.id}>
                    <Searchcard name={people.username} id={people.id}/>
                </li>
            </ul>}
        </div>
        <Outlet/>
    </div>
    )
}