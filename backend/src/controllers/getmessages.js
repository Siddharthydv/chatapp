import prisma from "../prisma/prismaclient.js";
const getmessages=async (req,res)=>{
  const user1_id=req.body.id;
  const user2_id=Number(req.params.friendid);
  // console.log(user1_id)
  // console.log(user2_id)
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
    console.log((messagedocs))
    res.json(messagedocs);
}

export default getmessages;