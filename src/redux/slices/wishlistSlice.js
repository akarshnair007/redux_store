import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // actions
    //1) to add items to whishlist

    addWishlistItem: (state, actions) => {
      state.push(actions.payload);
    },

    //2)to remove items from whishlist
    removeWishlistItem: (state, actions) => {
      return state.filter((item) => item.id != actions.payload);
    },
  },
});
export const { addWishlistItem, removeWishlistItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
