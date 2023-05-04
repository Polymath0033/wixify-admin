import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  isLogin: false,
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("");

  const userIsLogin = !!token;
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const authContext = {
    token: token,
    isLogin: userIsLogin,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
