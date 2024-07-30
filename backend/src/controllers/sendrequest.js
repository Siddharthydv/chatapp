import prisma from "../prisma/prismaclient.js";

const sendrequest=async(req,res)=>{
    const requesterid=req.body.id;
    const requesteeid=req.body.requesteeid;
        const entry=await prisma.friendRequest.create({
            data:{
                requester_id:requesterid,
                requestee_id:requesteeid
            }
        })
        res.send("done ")
    }
    
export default sendrequest;