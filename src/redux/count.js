import { createSlice } from "@reduxjs/toolkit";
const data1=createSlice({
    name:"Count",
    initialState:{
        items:[]
    },
    reducers:{
        addCount:(state,action)=>{
             return state.items.push(action.payload)
        }
    }

})
export const {addCount}=data1.actions
export default data1.reducer