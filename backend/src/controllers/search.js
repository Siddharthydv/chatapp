import prisma from "../prisma/prismaclient.js";
const search=async (req,res)=>{
    const searched_name=req.params.name;
    console.log(searched_name)
    const profile=await prisma.users.findUnique({
        where:{username:searched_name},
        select:{
            id:true,
            username:true,
            picurl:true
        }
    })
    if(!profile)
        res.send('null');
    else
        res.json(profile);
}
export default search;