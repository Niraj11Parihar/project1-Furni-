import { createSlice } from "@reduxjs/toolkit";
import { productData } from "./productData";

const initialState = {
  product: productData,
  cart: [],
  netTotal: 0,
};

const furniSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);

      if (index === -1) {
        const temp = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.push(temp);
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },
    decQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    getNetTotal: (state) => {
      let netTotal = 0;
      state.cart.forEach((item) => {
        let total = item.quantity * item.price;
        netTotal += total;
      });
      state.netTotal = netTotal;
    },
  },
});

export const { addProduct, removeToCart, incrQty, decQty, getNetTotal } = furniSlice.actions;
export default furniSlice.reducer;
