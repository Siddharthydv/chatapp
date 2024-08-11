import prisma from "../prisma/prismaclient.js";

const getuser=async(req,res)=>{
    
    const id=Number(req.params.friendid);
    const response=await prisma.users.findUnique({
        where:{id:id},
        select:
            {picurl:true,
            Status:true
            },
    })
    res.json(response);
}
export default getuser