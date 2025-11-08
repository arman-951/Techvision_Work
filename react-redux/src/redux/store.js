import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productReducer from './productSlice'
import cartsReducer from './cartSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
        carts:cartsReducer
    }
})

export default store;