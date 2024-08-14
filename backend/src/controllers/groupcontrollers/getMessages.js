import prisma from "../../prisma/prismaclient.js";
const getMessages=async (req,res)=>{
    const groupId=Number(req.params.groupId);
    const messages=await  prisma.groupmessages.findMany({
        where:{groupId:groupId},
        
        include:{
            user:{
                select:{username:true }
            }
        }
    })
    res.json(messages)
}
export default getMessages;