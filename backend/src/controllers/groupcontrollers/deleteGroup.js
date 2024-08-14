import prisma from "../../prisma/prismaclient.js";

const deleteGroup=async(req,res)=>{
    const groupId=req.body.groupId;
    const result=await prisma.groups.delete({
        where:{id:groupId}
    })
    res.send(result)
}
export default deleteGroup