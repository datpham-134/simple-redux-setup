import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/auth/auth.actions";
import { loginActionAsync } from "../../redux/auth/auth.thunk";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // TODO: get credentials from form
    const username = "username received from form";
    const password = "password received from form";
    const loginPayload = { username, password };

    // TODO: dispatch action with type: "LOGIN SUCCESS", payload: {username, password}
    dispatch(loginActionAsync(loginPayload));

    // TODO: set access token to local storage
    const tokenConfig = "access_token";
    localStorage.setItem(tokenConfig, "access token received from server");
  };

  const handleLogout = () => {
    // TODO: dispatch logout action
    dispatch(logoutAction());

    // TODO: clear access token from local storage
    const tokenConfig = "access_token";
    localStorage.removeItem(tokenConfig);
  };
  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>
            Hello, {currentUser?.firstName}. You're {currentUser?.age} years
            old. Your email is {currentUser?.email}
          </div>

          <button onClick={handleLogout}>fake logout</button>
        </>
      ) : (
        <>
          <div>You're not logged in</div>
          <button onClick={handleLogin}>fake login</button>
        </>
      )}
    </div>
  );
};

export default Header;
