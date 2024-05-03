import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //actions
    //1- add to cart
    addCartItem: (state, actions) => {
      state.push(actions.payload);
    },
    //2- remove from cart
    removeCartItem: (state, actions) => {
      return state.filter((item) => item.id != actions.payload);
    },
    emptyCart: (state) => {
      return (state = []);
    },
  },
});

export const { addCartItem, removeCartItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
