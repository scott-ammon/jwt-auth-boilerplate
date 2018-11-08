import { combineReducers } from "redux";
import { RESET_USER, LIFT_TOKEN_TO_STORE, SET_LOGIN_ERROR } from '../actions/index';

const initialState = {
  token: "",
  user: {
    id: null,
    name: null,
    email: null,
  },
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIFT_TOKEN_TO_STORE:
      if (!action.userData) {
        return state;
      } else {
        const stateWithToken = Object.assign({}, state, {
          token: action.userData.token,
          user: {
            id: action.userData.user._id,
            name: action.userData.user.name,
            email: action.userData.user.email,
          },
          error: null,
        });
        return stateWithToken;
      }
    case RESET_USER:
      const clearedState = Object.assign({}, state, {
        token: "",
        user: {
          id: null,
          name: null,
          email: null,
        },
        error: null,
      });
      return clearedState;
    case SET_LOGIN_ERROR:
      const errorState = Object.assign({}, state, {
        error: action.error,
      });
      return errorState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
  // add additional reducers you create here
});

export default rootReducer;