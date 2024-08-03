import prisma from "../prisma/prismaclient.js";
 const logout=async (userId)=>{
    //clearing token
    await prisma.users.update({
        where:{id:userId},
        data:{token:null}
    })
    return "loggedout"
}
export default logout