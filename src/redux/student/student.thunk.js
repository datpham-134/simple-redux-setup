import { studentApi } from "../../api/student";
import { fetchListStudentSuccessAction } from "./student.action";

// TODO: WRITE REDUX THUNK LOGIC
export const fetchListStudentAsync = () => {
  return async (dispatch) => {
    try {
      const response = await studentApi.get();
      dispatch(fetchListStudentSuccessAction(response));
    } catch (err) {}
  };
};
