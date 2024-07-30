import prisma from "../prisma/prismaclient.js";
const search=async (req,res)=>{
    const searched_name=req.body.name;
    const profile=await prisma.users.findUnique({
        where:{username:searched_name},
        select:{
            id:true,
            username:true
        }
    })
    if(!profile)
        res.send('null');
    else
        res.json(profile);
}
export default search;