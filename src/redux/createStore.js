import { configureStore } from "@reduxjs/toolkit";
import slice1 from './swiggyCreateSlice'
import data from './loginslice'
import data1 from './count'

const createStore=configureStore(
    {
        reducer:{
            cart:slice1, 
            login:data,
            count:data1
        }
    }
)

export default createStore