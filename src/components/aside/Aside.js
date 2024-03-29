import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Aside.module.css";
import { LogoutIcon, OrderIcon, RevenueIcon } from "../icons";
import { FeedbackIcon } from "../icons";
import { useContext } from "react";
import AuthContext from "../../store";

const Aside = () => {
  const activeLinkClass = (nav) => (nav.isActive ? classes.active : "");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    authContext.isLogin = false;
    navigate("/");
  };
  return (
    <aside className={classes.aside}>
      <ul>
        <li>
          <NavLink to="/admin" className={activeLinkClass} end>
            <i className="bi bi-grid-1x2-fill"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLinkClass} to="orders">
            <OrderIcon />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="drivers" className={activeLinkClass}>
            <i className="bi bi-car-front-fill"></i>
            Drivers
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLinkClass} to="customers-feedback">
            <FeedbackIcon />
            Customers Feedback
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLinkClass} to="revenue">
            <RevenueIcon />
            Revenue
          </NavLink>
        </li>
      </ul>
      <button
        onClick={() => {
          logout();
        }}
      >
        <i>
          <LogoutIcon />
        </i>
        Logout
      </button>
    </aside>
  );
};
export default Aside;
