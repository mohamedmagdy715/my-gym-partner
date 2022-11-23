import { all } from "redux-saga/effects";

import AuthSagas from "./Auth/saga";

export default function* rootSaga() {
  yield all([AuthSagas()]);
}
