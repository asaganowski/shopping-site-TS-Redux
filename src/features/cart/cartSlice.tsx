import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../products/types";
import { CartState } from "./types";


const initialState: CartState = {
    cartItems: localStorage.getItem("cartItems")?.length!==0
    ? JSON.parse(localStorage.getItem("cartItems") || '[]')
    : [],
    totalQuantity: 0,
    totalAmount: 0,
  };

  export const cartSlice = createSlice({
      name: "cartInfo",
      initialState,
      reducers: {
          addToCart(state: CartState,action: PayloadAction<Product>) {
            console.log(state.cartItems)
            const index = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (index >= 0) {
              state.cartItems[index] = {
                ...state.cartItems[index],
                cartQuantity: state.cartItems[index].cartQuantity + 1,
              };
              
            } else {
              
              state.cartItems.push({ ...action.payload, cartQuantity: 1 });
              
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          decrease(state: CartState,action: PayloadAction<Product>) {
            const index = state.cartItems?.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (state.cartItems[index].cartQuantity > 1) {
              state.cartItems[index].cartQuantity -= 1;
      
              
            } else if (state.cartItems[index].cartQuantity === 1) {
              state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
              );
      
            }
      
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          removeAll(state: CartState) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
          getTotals(state: CartState) {
            let { totalAmount, totalQuantity } = state.cartItems.reduce((cart, item) => {
                const { price, cartQuantity } = item;
                const itemTotalAmount = cartQuantity * price;
                cart.totalAmount += itemTotalAmount;
                cart.totalQuantity += cartQuantity;
      
                return cart;
              },
              {
                totalAmount: 0,
                totalQuantity: 0,
              }
            );
            state.totalQuantity = totalQuantity;
            state.totalAmount = parseFloat(totalAmount.toFixed(2));
          },
      }
  })

  export const { addToCart, decrease, removeAll, getTotals} = cartSlice.actions;

  export default cartSlice.reducer;
