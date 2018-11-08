import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../api/index';

function *authorize(action) {
  try {
    const response = yield call(api.login, action.userData);
    console.log("response in saga: ", response);
      if(response.data.hasOwnProperty('error')) {
        console.log("REPLACE THIS WITH AN ACTION TO SET ERROR MESSAGE")
      } else {
        localStorage.setItem('mernToken', response.data.token)
        yield put({type: "LIFT_TOKEN_TO_STORE", userData: response.data });
      }
  } catch (error) {
    console.log("Error: ", error);
  }
}

function *rootSaga() {
  yield takeEvery("REQUEST_LOGIN", authorize);
}

export default rootSaga