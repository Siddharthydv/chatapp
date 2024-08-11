import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:"userdetails",
    initialState:{
        userId:"",
        username:'',
        picurl:"",
        Status:"",
        lang:"hi"
    },
    reducers:{
        update:(state,action)=>{
            // console.log(action.payload)
            if(action.payload.userId)
                 state.userId=action.payload.userId
            if(action.payload.username)
                 state.username=action.payload.username;
            if(action.payload.picurl)
                state.picurl=action.payload.picurl
            if(action.payload.Status)
                state.Status=action.payload.Status        
        }
    }
   
})
export const {update}=userSlice.actions;
export default userSlice.reducer