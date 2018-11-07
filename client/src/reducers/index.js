import { combineReducers } from "redux";
import { UPDATE_USER, RESET_USER } from '../actions/index';

const initialState = {
  token: "",
  id: null,
  name: "",
  email: "",
  password: "",
}

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
		case RESET_USER:
		var blank = Object.assign({}, state, {
			token: "",
	    id: null,
	    name: "",
	    email: "",
	    password: "",
		});
		return blank;
    case UPDATE_USER:
      if (!action.userData) {
        return state;
      } else {
        var newObj = Object.assign({}, state, {
          token: action.userData.token,
          id: action.userData.user.id,
          name: action.userData.user.name,
          email: action.userData.user.email,
          password: action.userData.user.password,
        });
        return newObj;
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  userReducer,
  // add additional reducers you create here
});

export default rootReducer;