import { configureStore } from "@reduxjs/toolkit";

import uiSlicce from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlicce.reducer },
});

export default store;
