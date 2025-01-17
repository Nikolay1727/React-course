import { normalizedRestaurants } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    entities: normalizedRestaurants.reduce((acc: any, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  },
  reducers: {},
});
