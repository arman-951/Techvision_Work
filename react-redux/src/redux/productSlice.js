import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data.products)
    return data.products;
})

const initialState = {
    product: [],
    status: undefined,
    loading: false,
    error: null
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "Succeeded",
                    state.product = action.payload,
                    state.loading=false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default productSlice.reducer