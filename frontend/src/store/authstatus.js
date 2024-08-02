import { createSlice } from "@reduxjs/toolkit";
const authStatus=createSlice({
    name:"authStatus",
    initialState:{
        status:false
    },
    reducers:{
        login:(state,action)=>{
            state.status=true;
        },
        logout:(state)=>{
            state.status=false;
        }
    }
})
export const {login,logout}=authStatus.actions;
export default authStatus.reducer