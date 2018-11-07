import { combineReducers } from "redux";
import { RESET_USER, LIFT_TOKEN_TO_STORE } from '../actions/index';

const initialState = {
  token: "",
  user: {
    id: null,
    name: null,
    email: null,
  }
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
      });
		  return clearedState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
  // add additional reducers you create here
});

export default rootReducer;