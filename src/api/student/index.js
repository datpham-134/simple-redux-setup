const mockStudentData = [
  {
    id: "1",
    firstName: "Dat",
    lastName: "Pham",
    age: 22,
    email: "dp123@dev.com",
  },
  {
    id: "2",
    firstName: "Dieu",
    lastName: "To",
    age: 22,
    email: "dieuhuyen123@dev.com",
  },
  {
    id: "3",
    firstName: "Ninh",
    lastName: "Trinh",
    age: 22,
    email: "trinhbmn123@dev.com",
  },
  {
    id: "4",
    firstName: "Khoi",
    lastName: "Vu",
    age: 22,
    email: "thaykhoi@dev.com",
  },
  {
    id: "5",
    firstName: "Tue",
    lastName: "Hoang",
    age: 22,
    email: "hajimemashitue@dev.com",
  },
];

const fakeFetchListStudents = () => {
  return Promise.resolve(mockStudentData);
};

export const studentApi = {
  get: async () => {
    const listStudents = await fakeFetchListStudents();
    return listStudents;
  },
};
