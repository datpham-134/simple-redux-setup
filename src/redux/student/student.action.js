import { StudentTypes } from "./student.type";

export const fetchListStudentSuccessAction = (listStudent) => ({
  type: StudentTypes.FETCH_LIST_STUDENT_SUCCESS,
  payload: listStudent,
});

export const removeListStudent = () => ({
  type: StudentTypes.REMOVE_LIST_STUDENT,
});
