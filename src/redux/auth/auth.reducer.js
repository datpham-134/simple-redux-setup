import { AuthTypes } from "./auth.types";

const initialState = {
  isLoggedIn: false,
  currentUser: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: undefined,
      };
    default:
      return state;
  }
};
