import prisma from "../prisma/prismaclient.js"

const receivedrequest=async(req,res)=>{
    const userid=req.body.id;
        const requestslist=await prisma.friendRequest.findMany({
                where:{requestee_id:userid},
                include:{
                    requester:true
                }
            })
    const senderlist=requestslist.map(request=>{
        return {
            username:request.requester.username,
            requestid:request.id
    }})
    res.json(senderlist);
}
export default receivedrequest;