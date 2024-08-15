import prisma from "../../prisma/prismaclient.js";

const addMember=async(req,res)=>{
    const groupId=Number(req.body.groupId);
    const memberId=Number(req.body.memberId);
    const adminId=Number(req.body.id)
    const checkadmin=await prisma.groups.findFirst({
        where:{createdById:adminId}
    })
    if(!checkadmin){
        res.send("not admin")
        return;
    }
    console.log(checkadmin)
    const memberexist=await prisma.groupMember.findUnique({
        where:{
            groupId_userId:{
                groupId:groupId,
                userId:memberId
            }
        }
    })
    if(memberexist){
        res.send(false)
        return ;
    }
    const groupmember=await prisma.groupMember.create({
        data:{
            userId:memberId,
            groupId:groupId
        }
    })
    res.json(groupmember)
}
export default addMember