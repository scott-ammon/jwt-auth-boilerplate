import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api/index';

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
    console.log("Error: ", error);
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
    console.log("Error: ", error);
  }
}

function *rootSaga() {
  yield takeEvery("CHECK_FOR_LOCAL_TOKEN", checkToken);
  yield takeEvery("REQUEST_LOGIN", authorize);
}

export default rootSaga