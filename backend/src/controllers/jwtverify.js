import jwt from "jsonwebtoken"
const jwtverify=(req,res,next)=>{
   const token=req.cookies['Cookie_1']
   if(!token)
    res.send("token not present");

   const result =jwt.verify(token,"secret");
    if(!result)
        res.send("Uncorrect token");
    req.body.id=jwt.decode(token).payload.id;
    next();
    // next();
}

export default jwtverify