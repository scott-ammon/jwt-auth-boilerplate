import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api/api';

function *authorize(action) {
  try {
    const response = yield call(api.login, action.userData);
    if(response.data.hasOwnProperty('error')) {
      yield put({ type: "SET_LOGIN_ERROR", error: response.data.message });
    } else {
      localStorage.setItem('mernToken', response.data.token)
      yield put({ type: "LIFT_TOKEN_TO_STORE", userData: response.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function *signup(action) {
  try {
    const response = yield call(api.signup, action.userData);
    if(response.hasOwnProperty('error')) {
      yield put({ type: "SET_SIGNUP_ERROR", error: response.message });
    } else {
      localStorage.setItem('mernToken', response.data.token)
      yield put({ type: "LIFT_TOKEN_TO_STORE", userData: response.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function *checkToken() {
  try {
    // Look in local storage for the token
    const token = localStorage.getItem('mernToken');
    if(!token || token === 'undefined') {
      // There was no token
      localStorage.removeItem('mernToken');
      yield put({ type: "RESET_USER" });
    } else {
      // Token found in localStorage. send back to be verified
      const response = yield call(api.authMeFromToken, token);
      localStorage.setItem('mernToken', response.data.token)
      yield put({ type: "LIFT_TOKEN_TO_STORE", userData: response.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function *accessLockedRoute(action) {
  try {
    yield call(api.accessLockedRoute, action.token)
  } catch (error) {
    console.log(error);
  }
  yield put({ type: "LOCKED_ROUTE_SUCCESS" });
}

function *logoutUser() {
  localStorage.removeItem('mernToken');
  yield put({ type: "RESET_USER" });
}

function *rootSaga() {
  yield takeEvery("CHECK_FOR_LOCAL_TOKEN", checkToken);
  yield takeEvery("REQUEST_SIGNUP", signup);
  yield takeEvery("REQUEST_LOGIN", authorize);
  yield takeEvery("REQUEST_LOCKED_ROUTE", accessLockedRoute);
  yield takeEvery("REQUEST_LOGOUT", logoutUser);
}

export default rootSaga