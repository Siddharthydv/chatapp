import prisma from "../prisma/prismaclient.js";
 const logout=async (userId)=>{
    const userid=userId;
    //clearing token
    await prisma.users.update({
        where:{id:userid},
        data:{token:null}
    })
    return "true"
}
export default logout