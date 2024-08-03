import Input from "./Input.jsx";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { update } from "../store/userslice.js";
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../store/authstatus.js";
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
       <div className=" bg-[#164e63] flex h-screen border-2 border-solid border-black justify-center items-center">
        <div className=" flex flex-col border-2 border-solid border-slate-800 rounded-lg bg-white h-1/2 w-3/12">
            <div className="flex flex-col border-2  rounded-lg border-solid h-1/5 items-center justify-center">
                <h1 className="text-2xl font-bold font-mono">LOGIN</h1>
            </div>
            <div className="flex flex-col border-2 border-solid flex-grow justify-center items-center space-y-2">
                <Input label="Email" {...register("email")}></Input>
                <Input label="Password" {...register("password")}></Input>
                <input type="text"{...register("yo")}></input>
            </div>
            <div className=" rounded-lg flex flex-col  items-center border-2 border-solid h-2/6 space-y-2">
            <button type='submit' className="rounded-full border-2 border-solid border-green-700 w-2/5 bg-green-400"><h6 className="text-white">Submit</h6></button>
            <h6 className="font-mono font-extralight">Dont't have an account? <Link to="/signup">Signup</Link></h6>
            </div>
        </div>
       </div>
    </form>
    )
}