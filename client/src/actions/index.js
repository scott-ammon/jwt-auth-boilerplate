export const UPDATE_USER = "UPDATE_USER";
export const RESET_USER = "RESET_USER";

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData,
});

export const resetUser = () => ({
  type: RESET_USER,
});
