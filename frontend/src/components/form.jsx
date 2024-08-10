import { useForm } from "react-hook-form"
import axios from "axios"
import { update} from "../store/userslice.js"
export default function Form(){
    const {register,handleSubmit}=useForm()
    const upload=async(data)=>{
        console.log(data)
        const formData = new FormData();
        formData.append('profile-pic', data['profile-pic'][0]);  // Extract the file correctly
        formData.append('Status', data.Status);
        const response=await axios.put('http://localhost:3000/user/upload',formData,{
            withCredentials:true,
            headers:{
                'Content-Type':'multipart/form-data'
            }
            
        })
        update({picurl:response.data.picurl})
    }
    return(
      <form onSubmit={handleSubmit(upload)}>
        Image:<input type="file" accept="image/*" {...register('profile-pic')}/>
        Status<input type='text' {...register('Status')}/>
        <button type='submit' className="text-white">submit</button>
      </form>)      
}