import prisma from "../../prisma/prismaclient.js";
const createGroup=async (req,res)=>{
    const createdbyId=req.body.userId;
    const name=req.body.name;

    const newgroup=await prisma.groups.create({
        data:{
            name:name,
            createdById:createdbyId
        }
    })
    await prisma.groupMember.create({
        data:{
            groupId:newgroup.id,
            userId:newgroup.createdById
        }
    })
    res.json(newgroup)
}
export default createGroup