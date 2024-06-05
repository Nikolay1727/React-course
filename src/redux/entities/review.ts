import { normalizedReviews } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce((acc: any, review) => {
      acc[review.id] = review;

      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
