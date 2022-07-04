import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { result } from "../../interfaces/I_user";

interface valueProps {
  result: result[];
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    result: [],
  } as valueProps,
  reducers: {
    getUserList: (state, action: PayloadAction<number>) => {},
    updateUserList: (state, action: PayloadAction<any>) => {},
    success: (state, action) => ({
      result: [...action.payload],
    }),
  },
});

export const { getUserList, updateUserList, success } = userSlice.actions;

export default userSlice.reducer;
