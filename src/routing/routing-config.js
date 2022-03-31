import HomePage from "../pages/home";
import StudentPage from "../pages/student";

const routes = [
  {
    id: 1,
    path: "/",
    name: "Home",
    exact: true,
    isPrivate: false,
    component: HomePage,
  },
  {
    id: 2,
    path: "/student-detail",
    name: "Student Detail",
    exact: true,
    isPrivate: true,
    component: StudentPage,
  },
];

export default routes;
