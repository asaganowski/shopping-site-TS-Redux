import { createSlice } from "@reduxjs/toolkit"
import {ProductsState} from "./types"
import {getProducts} from "./getProducts"


const initialState: ProductsState = {
  list: [],
  status: "loading",
} as ProductsState

// Then, handle actions in your reducers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getProducts.fulfilled, (state, {payload}) => {
      state.list.push(...payload)
      state.status = "success";
    })

    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.status = "rejected";
    });
  },
})

export default productsSlice.reducer;