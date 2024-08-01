import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:"userdetails",
    initialState:{
        userId:"",
        username:''
    },
    reducers:{
        update:(state,action)=>{
            state.userId=action.payload.userId
            state.username=action.payload.username;
        }
    }
   
})
export const {update}=userSlice.actions;
export default userSlice.reducer