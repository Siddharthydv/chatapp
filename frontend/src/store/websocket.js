import { createSlice } from "@reduxjs/toolkit";
const websocket=createSlice({
    name:"websocket",
    initialState:{
        instance:""
    },
    reducers:{
        setinstance:(state,action)=>{
            state.instance=action.payload.ws;
        },
    }
})
export const {setinstance}=websocket.actions;
export default websocket.reducer