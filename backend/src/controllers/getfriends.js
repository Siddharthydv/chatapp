import { json } from "express";
import prisma from "../prisma/prismaclient.js";
const getfriends=async (req,res)=>{
    const userid=req.body.id;
    //including all the rows where one of the friend is userid 
    const list=await prisma.friendship.findMany({
        where:{
            OR:[
                {user_id1:userid},
                {user_id2:userid}
            ]
        },
        include:{
            user1:true,
            user2:true
        }
    })
    //from the recieved rows retreive the ids which are not=userid
    const friendprofiles=list.map(friend=>{
       return  friend.user_id1===userid?{friendid:friend.user2.id,friendname:friend.user2.username}:
       {friendid:friend.user1.id,friendname:friend.user1.username};
    })
    res.json(friendprofiles);
}

export default getfriends;