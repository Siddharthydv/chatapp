import prisma from "../../prisma/prismaclient.js"

const getGroups=async(req,res)=>{
    const userId=Number(req.body.id)
    const result=await prisma.groupMember.findMany({
        where:{userId:userId},
        select:{group:true}
    })
    // console.log(result)
    res.json(result);
}
export default getGroups;