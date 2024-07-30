import prisma from "../prisma/prismaclient.js";
const rejectreq=async(req,res)=>{
    const requestid=req.body.requestid;
    const result=await prisma.friendRequest.delete({
        where:{id:requestid}
    })
    res.send(200);
}
export default rejectreq;