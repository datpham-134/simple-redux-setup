import { authApi } from "../../api/auth";
import { loginSuccessAction } from "./auth.actions";

// TODO: WRITE REDUX THUNK LOGIC
export const loginActionAsync = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await authApi.login({ username, password });
      dispatch(loginSuccessAction(response));
    } catch (err) {}
  };
};
