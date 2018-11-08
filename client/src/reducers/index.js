import { combineReducers } from "redux";
import { RESET_USER, 
         LIFT_TOKEN_TO_STORE, 
         SET_LOGIN_ERROR,
         SET_SIGNUP_ERROR,
         LOCKED_ROUTE_SUCCESS } from '../actions/index';

const initialState = {
  token: "",
  user: {
    id: null,
    name: null,
    email: null,
  },
  loginError: null,
  signupError: null,
  lockedRoute: false,
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
        loginError: null,
        signupError: null,
        lockedRoute: false,
      });
      return clearedState;
    case SET_LOGIN_ERROR:
      const loginErrorState = Object.assign({}, state, {
        loginError: action.error,
      });
      return loginErrorState;
    case SET_SIGNUP_ERROR:
      const signupErrorState = Object.assign({}, state, {
        signupError: action.error,
      });
      return signupErrorState;
    case LOCKED_ROUTE_SUCCESS:
      const lockedRouteState = Object.assign({}, state, {
        lockedRoute: true,
      });
      return lockedRouteState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
  // add additional reducers you create here
});

export default rootReducer;