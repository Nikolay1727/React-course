import { normalizedUsers } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((acc: any, user) => {
      acc[user.id] = user;

      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
  reducers: {},
});
