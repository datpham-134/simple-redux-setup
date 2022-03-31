import { combineReducers } from "redux";
import { authReducer } from "./auth/auth.reducer";
import { studentReducer } from "./student/student.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
});
