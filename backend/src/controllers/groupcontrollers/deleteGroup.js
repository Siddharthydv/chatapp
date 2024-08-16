import prisma from "../../prisma/prismaclient.js";

const deleteGroup=async(req,res)=>{
    const groupId=Number(req.params.groupId);
    const group=await prisma.groups.findUnique({
        where:{
            id:groupId
        },
        select:{createdById:true}        
    })
    console.log(req.body.id)
    if(group.createdById!==req.body.id)
    {
        res.send(false)
        return;
    }
    const result=await prisma.groups.delete({
        where:{id:groupId}
    })
    res.send(result)
}
export default deleteGroup