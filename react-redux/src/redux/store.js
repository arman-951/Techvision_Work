import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import productReducer from './productSlice'
import cartsReducer from './cartSlice'
import userReducer from './userSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
        carts:cartsReducer,
        user:userReducer
    }
})

export default store;