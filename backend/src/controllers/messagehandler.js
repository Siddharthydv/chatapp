import prisma from "../prisma/prismaclient.js";
const messagehandler=async(senderId,recipientId,content)=>{
    await prisma.message.create({
        data:{
            senderId:senderId,
            recipientUserId:recipientId,
            content:content
        }
    })
}
export default messagehandler;