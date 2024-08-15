import prisma from "../../prisma/prismaclient.js";
const deleteMember=async(req,res)=>{
    const memberId=Number(req.params.memberId);
    const groupId=Number(req.params.groupId);
    const deleted=await prisma.groupMember.delete({
        where:{
            groupId_userId:{
                groupId:groupId,
                userId:memberId
            }
        }
    })
    res.json(deleted)
}
export default deleteMember