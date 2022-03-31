import { StudentTypes } from "./student.type";

const initialState = {
  listStudent: [],
};

export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case StudentTypes.FETCH_LIST_STUDENT_SUCCESS:
      return {
        ...state,
        listStudent: action.payload,
      };
    case StudentTypes.REMOVE_LIST_STUDENT:
      return {
        ...state,
        listStudent: [],
      };
    default:
      return state;
  }
};
