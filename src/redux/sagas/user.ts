import { PayloadAction } from "@reduxjs/toolkit";

import { put, takeLatest, call } from "redux-saga/effects";

import { getUserList, success } from "../slices/userSlice";

// Interface
import { result as UserInterface } from "../../interfaces/I_user";

//API
import { getUserList as getUserListApi } from "../..//axios/userApi";

function* handleUserList(action: PayloadAction<number>) {
  try {
    const result: { data: { results: UserInterface } } = yield call(
      getUserListApi,
      action.payload
    );
    console.log("111111", result.data.results, action.payload);
    yield put(success(result));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetUserList() {
  yield takeLatest(getUserList.type, handleUserList);
}
