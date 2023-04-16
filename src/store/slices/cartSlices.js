import {createSlice} from "@reduxjs/toolkit";


// Handles a reducer and its actions

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItem:(state,action)=>{
            // modofication of store's state.
            console.log("addItem Action triggered")
            state.cartItems.push(action.payload);
        },
        removeItem:(state,action)=>{
            // modofication of store's state.
            // state.cartItems.push(action.payload);
        }
    }
});

export default counterSlice.reducer;
export const {addItem, removeItem} =  counterSlice.actions;
