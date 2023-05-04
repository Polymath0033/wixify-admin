import { Link } from "react-router-dom";
import classes from "./TooltipList.module.css";
//import { io } from "socket.io-client";
//const socket = io.connect("http://localhost:3001");
const RouteList = ({ routes }) => {
  return (
    <ul className={classes.list}>
      {routes.map((li) => (
        <Link to={li.to} key={li.title}>
          {li.title}
        </Link>
      ))}
    </ul>
  );
};
export default RouteList;
