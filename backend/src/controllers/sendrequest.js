import prisma from "../prisma/prismaclient.js";

const sendrequest=async(requesterId,requesteeId)=>{
    const requesterid=requesterId;
    const requesteeid=requesteeId;
        const entry=await prisma.friendRequest.create({
            data:{
                requester_id:requesterid,
                requestee_id:requesteeid
            }
        })
        console.log('loggedout')
    }
    
export default sendrequest;