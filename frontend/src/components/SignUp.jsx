import Input from "./Input.jsx"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { Link } from "react-router-dom";
export default function SignUp(){
    const {register,handleSubmit}=useForm();
    const onsubmit=async(data)=>{
        const result=await axios.post("http://localhost:3000/signup",{
            email:data.email,
            password:data.password,
            username:data.username
        },{withCredentials:true})
        console.log(result)
    }
    return(
        <form onSubmit={handleSubmit(onsubmit)}>
        <div className=" bg-[#164e63] flex h-screen border-2 border-solid border-black justify-center items-center">
        <div className=" flex flex-col border-2 border-solid border-slate-800 rounded-lg bg-white h-3/5 w-3/12">
            <div className="flex flex-col border-2  rounded-lg border-solid h-1/5 items-center justify-center">
                <h1 className="text-2xl font-bold font-mono">SIGN UP</h1>
            </div>
            <div className="flex flex-col border-2 border-solid flex-grow justify-center items-center space-y-2">
                <Input label="Username" {...register("username")}></Input>
                <Input label="Email"{...register("email")}></Input>
                <Input label="Password"{...register("password")}></Input>
            </div>
            <div className="h-1/6 rounded-lg flex flex-col  items-center border-2 border-solid  space-y-2">
                <button type='submit' className="rounded-full border-2 border-solid border-green-700 w-2/6  bg-green-400"><h6 className="text-white">Submit</h6></button>
                <h6 className="font-mono font-extralight">Have an account?<Link to='/login'>Login</Link></h6>
            </div>
        </div>
       </div>
       </form>
    )
}