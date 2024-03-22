import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            // Vanilla(older) Redux =>  Don't mutate state.
            // const newState = [...state];
            // newState.items.push(action.payload);
            // Reduc Toolkit:- We can mutate the state.
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearCart : (state) => {
         state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;