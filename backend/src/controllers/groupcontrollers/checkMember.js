import prisma from "../../prisma/prismaclient.js"
const checkMember=async({userId,groupId})=>{
    const checkmember=await prisma.groupMember.findUnique({
        where:{
            groupId_userId:{
               userId:userId,
             groupId:groupId
            }
        }
    })
    return checkmember
}

export default checkMember