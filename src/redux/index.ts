import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { dishSlice, restaurantSlice, reviewSlice, userSlice } from "./entities";

export const store = configureStore({
  reducer: combineSlices(dishSlice, restaurantSlice, reviewSlice, userSlice),
});
