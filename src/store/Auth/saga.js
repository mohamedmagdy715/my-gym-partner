import {
  put,
  takeEvery,
  // call
} from "redux-saga/effects";

// import * as apis from "../../network/apis/auth";
import { signInResponse } from "./slice";
// import { setUser } from "./helpers";
import { showHideSnackbar } from "../Snackbar/slice";

export function* signInSaga({ payload }) {
  try {
    // const response = yield call(apis.login, payload);
    yield put(signInResponse(payload));
    // yield setUser(response.data);
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
}
