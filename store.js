import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import resturantReducer from "./features/resturantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    resturant: resturantReducer,
  },
});
