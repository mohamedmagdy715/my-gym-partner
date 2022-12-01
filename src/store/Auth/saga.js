import { put, takeEvery, call } from "redux-saga/effects";

import * as apis from "../../network/apis/auth";
import { signInResponse, signOutResponse } from "./slice";
import { clearUser, setUser } from "./helpers";
import { showHideSnackbar } from "../Snackbar/slice";
import { ROUTES_PATHS } from "../../utils/RoutesPaths";

export function* signInSaga({ payload }) {
  try {
    const response = yield call(apis.signIn, payload.data);
    yield put(signInResponse(response.data));
    yield setUser(response.data, payload.data?.rememberMe);
    yield payload.navigate(ROUTES_PATHS.home);
  } catch (err) {
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: err.response?.data?.message,
      })
    );
  }
}

export function* signOutSaga({ payload }) {
  try {
    const response = yield call(apis.signOut);
    yield put(signOutResponse(response.data));
    yield clearUser();
    yield payload.navigate(ROUTES_PATHS.signIn);
  } catch (err) {
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: err.response?.data?.message,
      })
    );
  }
}

export function* signUpSaga({ payload }) {
  try {
    const response = yield call(apis.signUp, payload.data);
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "success",
        message: response.data?.message,
      })
    );
    yield payload.navigate(ROUTES_PATHS.signIn);
  } catch (err) {
    yield put(
      showHideSnackbar({
        isOpen: true,
        type: "error",
        message: err.response?.data?.message,
      })
    );
  }
}

export default function* AuthSagas() {
  yield takeEvery("auth/signInRequest", signInSaga);
  yield takeEvery("auth/signOutRequest", signOutSaga);
  yield takeEvery("auth/signUpRequest", signUpSaga);
}
