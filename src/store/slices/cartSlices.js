import {createSlice} from "@reduxjs/toolkit";


// Handles a reducer and its actions

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.cartItems.push(action.payload);
        }
    }
})