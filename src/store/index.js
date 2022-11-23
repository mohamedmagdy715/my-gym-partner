import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import loaderReducer from "./Loader/slice";
import snackbarReducer from "./Snackbar/slice";
import authReducer from "./Auth/slice";
import localeReducer from "./Locale/slice";
import darkmodeReducer from "./darkmode/slice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    snackbar: snackbarReducer,
    auth: authReducer,
    locale: localeReducer,
    darkmode: darkmodeReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
