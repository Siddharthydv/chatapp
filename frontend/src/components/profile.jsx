import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Profile(){
    const picurl=useSelector(state=>state.userdetails.picurl)
    const Status=useSelector(state=>state.userdetails.Status)
    // console.log(picurl)
    return( <div className="flex w-1/3 border border-white h-full text-white">
                <div className="flex flex-col  w-full h-1/3 justify-center items-center">
                    <img src={picurl} className="w-18 h-18 rounded-full"/>
                    <h1 className="text-white">{Status}</h1>
                     <div className="flex flex-row-reverse border">
                        <Link to='../update'> <svg className="w-7 h-7 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg></Link>
                    </div>
                </div>     
            </div>)
   
}