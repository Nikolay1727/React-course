import { restaurants } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const TabsSlice = createSlice({
  name: "tab",
  initialState: {
    tab: restaurants[0].id,
  },
  reducers: {
    setTab: (state, { payload: tab }: PayloadAction<string>) => {
      state.tab = tab;
    },
  },
});

export const tabActions = {
  ...TabsSlice.actions,
};
