import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { result } from "../../interfaces/I_user";

interface valueProps {
  value: {
    result: result[];
  };
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      result: [],
    },
  } as valueProps,
  reducers: {
    getUserList: (state, _action: PayloadAction<number>) => {},
    success: (state, _action: any) => ({
      ...state,
      value: {
        ...state.value,
      },
    }),
  },
});

export const { getUserList, success } = userSlice.actions;

export default userSlice.reducer;
