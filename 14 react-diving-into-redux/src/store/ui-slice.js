import { createSlice } from "@reduxjs/toolkit";

const uiSlicce = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlicce.actions;

export default uiSlicce;
