import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { login } from './store/authstatus'
import { update } from './store/userslice'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
function App() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
 useEffect(()=>{
        async function apicall(){
          const result= await axios.post("http://localhost:3000/verify",{},{withCredentials:true})
          console.log(result)
          const userdata=result.data
          if(!result.data){
            navigate('/login')}
          else {
            dispatch(login());
            dispatch(update({userId:userdata.userId,username:userdata.username}))
            navigate('/home')
            // navigate('/signup')
          }
        }
       apicall();
 },[])
//  const authstatus=useSelector(state=>state.authStatus.status);
//  console.log(authstatus);
  return (
    <>
     <Outlet></Outlet>
    </>
  )
}

export default App
