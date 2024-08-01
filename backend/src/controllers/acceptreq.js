import prisma from "../prisma/prismaclient.js";
const acceptreq=async(requestId)=>{
    const requestid=requestId;
    const request=await prisma.friendRequest.findUnique({
        where:{id:requestid}
    })
    const user1=request.requester_id;
    const user2=request.requestee_id;
    const result=await prisma.friendship.create({
        data:{
            user_id1:user1,
            user_id2:user2
        }
    })
    await prisma.friendRequest.delete({
        where:{id:requestid}
    });
    // res.status(200);
}
export default acceptreq;