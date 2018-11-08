export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const REQUEST_SIGNUP = "REQUEST_SIGNUP";
export const LIFT_TOKEN_TO_STORE = "LIFT_TOKEN_TO_STORE";
export const RESET_USER = "RESET_USER";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";
export const CHECK_FOR_LOCAL_TOKEN = "CHECK_FOR_LOCAL_TOKEN";
export const REQUEST_LOCKED_ROUTE = "REQUEST_LOCKED_ROUTE";
export const LOCKED_ROUTE_SUCCESS = "LOCKED_ROUTE_SUCCESS";

export const requestLogin = (email, password) => ({
  type: REQUEST_LOGIN,
  userData: {
    email,
    password,
  },
});

export const requestLogout = () => ({
  type: REQUEST_LOGOUT,
});

export const liftTokenToStore = (userData) => ({
  type: LIFT_TOKEN_TO_STORE,
  userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const setLoginError = (error) => ({
  type: SET_LOGIN_ERROR,
  error,
});

export const setSignupError = (error) => ({
  type: SET_SIGNUP_ERROR,
  error,
});

export const requestSignup = (name, email, password) => ({
  type: REQUEST_SIGNUP,
  userData: {
    name,
    email,
    password,
  },
});

export const checkForLocalToken = () => ({
  type: CHECK_FOR_LOCAL_TOKEN,
});

export const requestLockedRoute = (token) => ({
  type: REQUEST_LOCKED_ROUTE,
  token,
});

export const lockedRouteSuccess = () => ({
  type: LOCKED_ROUTE_SUCCESS,
})