import prisma from "../prisma/prismaclient.js";
 const logout=async (req,res)=>{
    const userid=req.body.id;
    //clearing token
    await prisma.users.update({
        where:{id:userid},
        data:{token:null}
    })
    res.send("done")
}
export default logout