import prisma from "../prisma/prismaclient.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await prisma.users.findUnique({where:{email:email}});
    if(!user){
        res.send(false);return;}
    //passwordcheck
    const result=await bcrypt.compare(password,user.password)
    if(!result){ res.send(false); return;}
    //generating token
    const token=jwt.sign({email:email,userId:user.id,username:user.username},"secret")
        try{
        await prisma.users.update({
            where:{email:email},
            data:{token:token}
        })
        res.cookie('authToken', token,{ sameSite:'Lax', secure:false,httpOnly: false,//Helps prevent CSRF attacks
            expires: new Date(Date.now() + 90000000) })// Cookie expiration time in milliseconds (1 hour)})
        res.send({userId:user.id,username:user.username})
        }catch(error){res.send(error)};
}