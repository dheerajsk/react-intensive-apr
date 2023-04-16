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
        },
        increaseQty:(state, action)=>{
            const index = state.cartItems.indexOf(action.payload)
            state.cartItems[index].qty++;
        }
    }
});

export default counterSlice.reducer;
export const {addItem, removeItem} =  counterSlice.actions;
export const cartSelector = (state)=> state.cartItems.length;
