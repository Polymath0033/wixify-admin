import { Outlet, useLocation, useNavigate } from "react-router-dom";
import classes from "./AuthLayout.module.css";

//import { useState } from "react";

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const button =
    location.pathname === "/create-an-account" ? "Login" : "Sign up";
  const navigateHandler = (e) => {
    const { value } = e.target;
    if (value === "Sign up") {
      navigate("/create-an-account");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <main className={classes.main}>
        <header className={classes.header}>
          <button>
            {location.pathname === "/create-an-account"
              ? "Have an account"
              : "Don't have account"}
            ?
          </button>
          <button value={button} onClick={navigateHandler}>
            {button}
          </button>
        </header>

        <div className={classes.auth}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default AuthLayout;
