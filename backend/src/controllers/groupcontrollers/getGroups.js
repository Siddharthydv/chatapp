import prisma from "../../prisma/prismaclient.js"

const getGroups=async(req,res)=>{
    const userId=Number(req.params.groupId)
    const result=await prisma.users.findUnique({
        where:{id:userId},
        select:{groups:true}
    })
    res.json(result);
}
export default getGroups;