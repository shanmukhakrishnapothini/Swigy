import { createSlice } from "@reduxjs/toolkit";
const data=createSlice(
    {
        name:"login",
        initialState:{
            items:[]
        },
        reducers:{
            addUser:(state,action)=>{
                return state.items.push(action.payload)
            }
        }

    }
)
export const {addUser} = data.actions

export default data.reducer