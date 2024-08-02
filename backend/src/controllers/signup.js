 import prisma from "../prisma/prismaclient.js";
 import bcrypt from "bcrypt"
 const signup=async (req,res)=>{
    const {email,password,username}=req.body;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //email pattern test
    try{
        if(!emailPattern.test(email))
        throw "not a valid email";
    }catch(err){res.send(err)};
//existinguser check
    const existinguser=await prisma.users.findUnique({where:{email:email}});
    if(existinguser) res.send("existing user");
   //user creation&&password hashing
   try{
    const hashedpassword=await bcrypt.hash(password,10)
    const newUser=await prisma.users.create({
            data:{
                email:email,
                username:username,
                password:hashedpassword,
            }
        })
        res.send(newUser.username)
    }catch(error){console.log("error in password hasing section="+error)}
}
export default signup