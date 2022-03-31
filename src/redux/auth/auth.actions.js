import { AuthTypes } from "./auth.types";

// LOGIN INFO: username, password
export const loginSuccessAction = (loginInformation) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: loginInformation,
});

// TODO: handle login failure action

export const logoutAction = () => ({
  type: AuthTypes.LOGOUT,
});
