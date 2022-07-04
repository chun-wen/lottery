import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import { put, takeLatest, call } from "redux-saga/effects";

import { getUserList, updateUserList, success } from "../slices/userSlice";

// Interface
import { result as UserInterface } from "../../interfaces/I_user";

//API
import { getUserList as getUserListApi } from "../../axios/userApi";

function* handleUserList(action: PayloadAction<number>) {
  try {
    const res: AxiosResponse<{ results: UserInterface[] }> = yield call(
      getUserListApi,
      action.payload
    );
    yield put(success(res.data.results));
  } catch (e) {
    console.log(e);
  }
}

function* handleUpdateUserList(action: PayloadAction<any>) {
  try {
    yield put(success(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetUserList() {
  yield takeLatest(getUserList.type, handleUserList);
}

export function* watchUpdateUserList() {
  yield takeLatest(updateUserList.type, handleUpdateUserList);
}
