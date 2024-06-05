import { normalizedDishes } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export const DishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc: any, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
