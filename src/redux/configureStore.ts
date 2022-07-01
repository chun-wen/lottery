import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
