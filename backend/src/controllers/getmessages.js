import prisma from "../prisma/prismaclient.js";
const getmessages=async (user1_id,user2_id)=>{
    const messagedocs=await prisma.message.findMany({
        where: {
            OR: [
              {
                AND: [
                  { senderId:user1_id },
                  { recipientUserId:user2_id },
                ],
              },
              {
                AND: [
                    { senderId:user2_id },
                    { recipientUserId:user1_id },
                ],
              },
            ],
        },
    })
    console.log(messagedocs)
    return messagedocs;
}

export default getmessages;