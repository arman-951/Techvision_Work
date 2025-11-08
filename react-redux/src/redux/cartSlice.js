import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // items:[]
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    quantity: 1,
    status: ''
}

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            //   state.items.push(action.payload);
            //   localStorage.setItem('cart',JSON.stringify(state.items))

            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        removeItemFromCart: (state, action) => {
            // const cartData=state.items.filter(item=>item.id!==action.payload.id);
            // state.items=cartData;
            // localStorage.setItem('cart',JSON.stringify(cartData))

            state.items = state.items.filter((item) => item.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload)
            if (item) item.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        orderPlaced: (state) => {
            state.status = alert('Order Placed');
            localStorage.clear()
            state.items = [];
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart')
        }
    },
});

export const { addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity, clearCart, orderPlaced } = cartSlice.actions;
export default cartSlice.reducer;