import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  const navigate = useNavigate();
  const notificationBtn = () => {
    navigate("/notifications");
  };
  return (
    <header className={classes.header}>
      <div className={classes.head}>
        <h1>Wixify</h1>
      </div>
      <ul>
        <li>
          <h4>&#128075;Hi Wittig {/* name will replace wittig*/},</h4>
          <span>Let's get productive day!</span>
        </li>
        <li>
          <div className={classes.div}>
            <div className={classes.search}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
              />
              <i className={classes["search-icon"]}>
                <i className="bi bi-search"></i>
              </i>
            </div>
            <i onClick={notificationBtn} className={classes.icon}>
              <i className="bi bi-bell"></i>
              <span className={classes.dot}></span>
            </i>
          </div>

          <div>
            <h4>Wittig</h4>
            <span>Admin</span>
          </div>
        </li>
      </ul>
    </header>
  );
};
export default Header;
