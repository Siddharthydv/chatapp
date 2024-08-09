import jwt from "jsonwebtoken"
const jwtverify=(req,res,next)=>{
   const token=req.cookies['authToken']
//    console.log("token="+token)
   if(!token){
    res.send(false); return ;}
   try{
   const result =jwt.verify(token,"secret");
   const decoded=jwt.decode(token);
//    console.log(decoded)
    if(result){//for verification done by initial load of app
    req.body.id=decoded.userId;//incase this file is used as a middleware
    next();
    }
   }catch(error){
        res.send(false);}
    //  res.send(true);
    
    // next();
}

export default jwtverify