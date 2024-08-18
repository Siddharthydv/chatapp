import { uploadfile } from "../utils/cloudinary.js"
import prisma from "../prisma/prismaclient.js"
import fs from "fs"
const uploadimage=async(req,res)=>{
   // console.log(req.user)
    console.log(req.file)
   let response;
   let status;
   if(req.file){
       response= await uploadfile(req.file.path)
      if(response){
      await prisma.users.update({
         where:{id:req.user},
         data:{
            picurl:response.url
         }
      })
      fs.unlink(req.file.path,(err) => {
         if (err) {
         console.error('Error deleting the file:', err);
         } else {
         console.log('File deleted successfully');
         }
      })
      }
   }
   res.json({
      picurl:response.url
   })
}
export default uploadimage