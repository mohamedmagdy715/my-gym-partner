import store from "../../store";
import { showHideLoader } from "../../store/Loader/slice";

export const isHandlerEnabled = (config = {}) => {
  return Object.prototype.hasOwnProperty.call(config, "handlerEnabled") &&
    !config.handlerEnabled
    ? false
    : true;
};

// This is used to handle remove loader only if all pending requests are resolved
let numberOfAjaxCAllPending = 0;

export const requestHandler = (request) => {
  numberOfAjaxCAllPending++;
  if (isHandlerEnabled(request)) {
    store.dispatch(showHideLoader(true));
    const user = JSON.parse(sessionStorage.getItem("depayUser"));
    const token = user?.token;
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    const operationMode = sessionStorage.getItem("operationMode");
    if (operationMode) {
      request.headers["Partner-Mode"] = operationMode;
    }
  }
  return request;
};

export const successHandler = (response) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(response)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  return response;
};

export const errorHandler = (error) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(error.config)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  return Promise.reject({ ...error });
};
