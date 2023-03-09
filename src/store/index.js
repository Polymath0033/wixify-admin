import React, { useState, useEffect, useCallback } from "react";

const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  isLogin: false,
});

const tokenStore = () => {
  const storedToken = localStorage.getItem("token");

  return {
    token: storedToken,
  };
};
export const AuthProvider = (props) => {
  const tokenData = tokenStore();
  let initialToken;
  if (initialToken) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState("");

  const userIsLogin = !!token;
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  useEffect(() => {
    if (tokenData) {
      //   console.log(tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
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
