import React from "react";
import { useDispatch } from "react-redux";
import { removeListStudent } from "../../redux/student/student.action";
import { fetchListStudentAsync } from "../../redux/student/student.thunk";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HomePage</h1>
      <h2>This app demonstrate react flow using redux, redux thunk</h2>
      <ul>
        👌Features:
        <li>Login, Logout</li>
        <li>Auth feature: cannot access student-detail page without login</li>
        <li>Fetch list student, remove list student</li>
      </ul>
      <ul>
        🙌Flow:
        <li>Login</li>
        <li>Click fetch to get list student</li>
        <li>
          Try to navigate to student detail page, student data goes there 😂
        </li>
      </ul>
      <ul>
        👍Benefits:
        <li>Using redux, data can be access from every page</li>
      </ul>
      <ul>
        😢Drawback:
        <li>Requires many boiler plate code</li>
      </ul>
      <button onClick={() => dispatch(fetchListStudentAsync())}>Fetch</button>
      <button onClick={() => dispatch(removeListStudent())}>
        Remove List Student
      </button>
    </div>
  );
};

export default HomePage;
