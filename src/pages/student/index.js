import React from "react";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const listStudent = useSelector((state) => state.student.listStudent);
  console.log(6, listStudent);
  return (
    <div>
      <h1>StudentPage</h1>
      <h2>🙌List student fetch from home page will display here:</h2>
      <p>😎 Try to back to home page, remove list student and go here</p>
      <ul>
        {listStudent.map((student) => {
          const { id, firstName, lastName, age, email } = student;
          return (
            <li key={id}>
              {firstName} {lastName} - {age} - {email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentPage;
