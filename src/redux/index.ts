import { combineSlices, configureStore } from "@reduxjs/toolkit";
import {
    DishSlice,
    RestaurantSlice,
    ReviewSlice,
    TabsSlice,
    UserSlice
} from "./entities";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    TabsSlice
  ),
});
