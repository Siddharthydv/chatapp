import Input from "./Input.jsx"
import { useForm } from "react-hook-form"
import axios from 'axios'
import { Link } from "react-router-dom";
import bgimage from "../assets/bg.jpg"
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
        <div className=" bg-black flex h-screen border-2 border-solid border-black justify-center items-center">
            <div className="flex border  border-neutral-900 rounded-md w-1/2 h-2/3">
                <div name="form" className="flex items-center justify-center w-1/2 h-full ">
                    <div className=" flex flex-col border-2 border-solid border-black rounded-lg text-slate-300 h-2/3 w-2/3">
                        <div className="flex flex-col  rounded-lg  h-1/5 items-center justify-center">
                            <h1 className="text-2xl font-bold font-mono">SIGN UP</h1>
                        </div>
                        <div className="flex flex-col  flex-grow justify-center items-center space-y-4">
                            <Input label="Username" {...register("username")}></Input>
                            <Input label="Email"{...register("email")}></Input>
                            <Input label="Password"{...register("password")}></Input>
                        </div>
                        <div className="h-1/6 rounded-lg flex flex-col  items-center  space-y-2">
                            <button type='submit' className="rounded-full border-2 border-solid    hover:bg-[#1c1866] w-1/3  bg-[#3a31d8] hover:text-black"><h6 className="text-white">Submit</h6></button>
                            <h6 className="font-mono font-extralight">Have an account?<Link to='/login'  className="border-b border-[#3a31d8] hover:text-[#3a31d8]">Login</Link></h6>
                        </div>
                    </div>
                </div>
                <div name="image" className="flex w-1/2 h-full  bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})`}}></div>
            </div>
        </div>
        </form>
    )
}