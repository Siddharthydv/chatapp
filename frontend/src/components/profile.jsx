import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Profile(){
    const picurl=useSelector(state=>state.userdetails.picurl)
    // console.log(picurl)
    return( <div className="flex w-1/3 border border-white h-full text-white">
        <div className="flex flex-col border w-full h-1/3 justify-center items-center">
        <img src={picurl} className="w-20 h-20"/>
       <Link to='../update'> <p className="text-white">EDIT</p></Link>
        </div>
        
    </div>)
   
}