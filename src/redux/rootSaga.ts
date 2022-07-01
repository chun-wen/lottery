import { all, fork } from "redux-saga/effects";

import * as userSagas from "./sagas/user";

export default function* rootSaga() {
  yield all([...Object.values(userSagas)].map(fork));
}
