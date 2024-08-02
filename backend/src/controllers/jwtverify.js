import jwt from "jsonwebtoken"
const jwtverify=(req,res,next)=>{
   const token=req.cookies['authToken']
   console.log("token="+token)
   if(!token){
    res.send(false); return ;}
   try{
   const result =jwt.verify(token,"secret");
   console.log(jwt.decode(token))
    if(result){
    req.body.id=jwt.decode(token).userId;
    res.send(true)
    next();
    }
   }catch(error){
        res.send(false);}
    //  res.send(true);
    
    // next();
}

export default jwtverify