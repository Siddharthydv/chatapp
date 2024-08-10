import prisma from "../prisma/prismaclient.js"
const profiledetails=async(req,res)=>{
    console.log(req.body.id)
    const result =await prisma.users.findUnique({
        where:{id:req.body.id},
        select:{
            picurl:true,
            Status:true
        }
    })
    res.json(result);
}
export default profiledetails