import prisma from "../prisma/prismaclient.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await prisma.users.findUnique({where:{email:email}});
    if(!user)
        res.send("userdoesnotexist");
    //passwordcheck
    const result=await bcrypt.compare(password,user.password)
    if(!result) res.send("password incorrect");
    //generating token
    const token=jwt.sign({email:email,userId:user.id},"secret")
        try{
        await prisma.users.update({
            where:{email:email},
            data:{token:token}
        })
        res.cookie('authToken', token)
        res.send("done")
        }catch(error){res.send(error)};
}