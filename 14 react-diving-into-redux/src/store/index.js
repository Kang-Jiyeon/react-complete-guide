import { configureStore } from "@reduxjs/toolkit";

import uiSlicce from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlicce.reducer, cart: cartSlice.reducer },
});

export default store;
