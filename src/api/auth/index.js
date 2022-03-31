const mockUserData = [
  {
    id: "1",
    firstName: "Dat",
    lastName: "Pham",
    age: 22,
    email: "dp123@dev.com",
  },
];

const fakeLoginApi = ({ username, password }) => {
  console.log("....write validate logic");
  return Promise.resolve(mockUserData[0]);
};

export const authApi = {
  login: async ({ username, password }) => {
    const userInfo = await fakeLoginApi({ username, password });
    return userInfo;
  },
};
