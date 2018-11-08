export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const LIFT_TOKEN_TO_STORE = "LIFT_TOKEN_TO_STORE";
export const RESET_USER = "RESET_USER";

export const requestLogin = (email, password) => ({
  type: REQUEST_LOGIN,
  userData: {
    email,
    password,
  },
})

export const liftTokenToStore = (userData) => ({
  type: LIFT_TOKEN_TO_STORE,
  userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});
