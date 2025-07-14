import { createSlice } from "@reduxjs/toolkit";

const slice1=createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem:(state)=>{
                state.items=[]
            }
        } 
    }
)
export const {addItem,removeItem}=slice1.actions

export default slice1.reducer