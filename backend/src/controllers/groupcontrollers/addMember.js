import prisma from "../../prisma/prismaclient.js";

const addMember=async(req,res)=>{
    const groupId=Number(req.body.groupId);
    const memberId=Number(req.body.memberId);
    const adminId=Number(req.body.adminId)
    const checkadmin=await prisma.groups.findFirst({
        where:{createdById:adminId}
    })
    if(!checkadmin){
        res.send("not admin")
        return;
    }
    console.log(checkadmin)
    const groups=await prisma.groupMember.create({
        data:{
            userId:memberId,
            groupId:groupId
        }
    })
    res.json(groups)
}
export default addMember