import Input from "./Input.jsx";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/userslice.js";
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../store/authstatus.js";
import bgimage from "../assets/bg.jpg"
import catbg from '../assets/catbg.jpg'
export default function LoginForm()
{
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const {register,handleSubmit}=useForm();
    const onSubmit=async(data)=>{
        const response = await axios.post('http://localhost:3000/login',{
            email:data.email,
            password:data.password
        },{withCredentials:true});
        console.log(response)
        const userdata=response.data
        if(userdata)
        {
            dispatch(login());
            dispatch(update({userId:userdata.userId,username:userdata.username}))
            
            navigate('../home')
        }
        }
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <div className="bg-black flex h-screen border-2 border-solid border-black justify-center items-center bg-cover bg-center " >
            
            <div className="flex border border-neutral-900 w-1/2 h-2/3 rounded-md">
                <div name="form" className="flex w-1/2 h-full  items-center justify-center">
                    <div className=" flex flex-col   rounded-lg  h-2/3 w-2/3 text-slate-300">
                        <div name="heading" className="flex flex-col   rounded-lg border-solid h-1/5 items-center justify-center">
                            <h1 className="text-2xl font-bold font-sans">LOGIN</h1>
                        </div>
                        <div name="body" className="flex flex-col  border-solid flex-grow justify-center items-center space-y-4">
                            <Input label="Email" {...register("email")}></Input>
                            <Input label="Password" {...register("password")}></Input>
                        </div>
                        <div name="footer" className=" rounded-lg flex flex-col  items-center h-2/6 space-y-4 pt-7">
                            <button type='submit' className="rounded-full border-2 border-solid hover:bg-[#1c1866] w-1/3  bg-[#3a31d8] hover:text-black"><h6 className="text-white hover:text-black hover:font-semibold">Submit</h6></button>
                            <h6 className="font-mono font-extralight">Dont't have an account? <Link to="../signup" className="border-b border-[#3a31d8] hover:text-[#3a31d8]">Signup</Link></h6>
                        </div>
                    </div>
                 </div>
                <div name="image" className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${catbg})`}}></div>       
             </div>
             
        </div>
    </form>
    )
}