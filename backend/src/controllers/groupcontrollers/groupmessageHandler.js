import prisma from "../../prisma/prismaclient.js"
import checkMember from "./checkMember.js"

 const groupmessageHandler=async({userId,groupId,content})=>{
   
    if(!await checkMember({userId,groupId}))
    {
        console.log("not a member of this group")
        return;
    }
    const message=await prisma.groupmessages.create({
        data:{
            content:content,
            userId:userId,
            groupId:groupId
        }
    })
    return message;
}
export default groupmessageHandler