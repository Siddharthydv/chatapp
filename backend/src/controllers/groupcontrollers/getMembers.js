import prisma from "../../prisma/prismaclient.js"

const getMembers=async(req,res)=>{
    const members=await prisma.groupMember.findMany({
        where:{groupId:Number(req.params.groupId)},
    
        include:{
            user:{
                select:{
                    id:true,
                    username:true
                }
            }
        }
    })
    res.json(members)
}
export default getMembers