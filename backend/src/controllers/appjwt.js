import jwt from "jsonwebtoken"
const appjwt=(req,res,next)=>{
   const token=req.cookies['authToken']
   console.log("token="+token)
   if(!token){
    res.send(false); return ;}
   try{
   const result =jwt.verify(token,"secret");
   const decoded=jwt.decode(token);
   console.log(decoded)
    if(result){
    res.send(decoded)//for verification done by initial load of app
    }
   }catch(error){
        res.send(false);}
    //  res.send(true);
    
    // next();
}
export default appjwt