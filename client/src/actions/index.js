export const LIFT_TOKEN_TO_STORE = "LIFT_TOKEN_TO_STORE";
export const RESET_USER = "RESET_USER";

export const liftTokenToStore = (userData) => ({
  type: LIFT_TOKEN_TO_STORE,
  userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});
