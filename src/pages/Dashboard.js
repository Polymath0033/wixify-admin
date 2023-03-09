import { useRef, useState } from "react";
import classes from "./Dashboard.module.css";
import {
  CancelRide,
  DriverIcon,
  RequestIcon,
  RidersIcon,
  AvailableIcon,
  ArrowIcon,
} from "../components/icons";
//import Chart from "../components/UI/Chart";
import Chart from "../components/Chart";
//let date = "";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const Dashboard = () => {
  // const [change, setChange] = useState("monthly");
  const inputRef = useRef();
  const changeHandler = (e) => {};
  const dashboard = [
    {
      title: "Total Rides",
      icon: <RidersIcon />,
      value: 45,
    },
    {
      title: "Total Rides Amount",
      icon: <RidersIcon />,
      value: 1000000,
    },
    {
      title: "Pending Rides",
      icon: <RequestIcon />,
      value: 25,
    },
    {
      title: "Cancelled Rides",
      icon: <CancelRide />,
      value: 30,
    },
    {
      title: "Numbers of Drivers",
      icon: <DriverIcon />,
      value: 30,
    },
    {
      title: "Available Rides",
      icon: <AvailableIcon />,
      value: 27,
    },
  ];
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({
    labels: expenses.map((expense) => days[new Date(expense.date).getDay()]),
    color: "red",
    datasets: [
      {
        label: "Orders",
        data: expenses.map((datum) => datum.amount),
        backgroundColor: "#1AE198",
      },
    ],
  });
  return (
    <section>
      <div className={classes.top}>
        <h1>Overview</h1>
        <button>
          <input
            type="date"
            name="date"
            ref={inputRef}
            onChange={changeHandler}
          />
        </button>
      </div>
      <div className={classes.grid}>
        {dashboard.map((dash) => (
          <div className={classes.item} key={dash.title}>
            <i>{dash.icon}</i>
            <p>{dash.title}</p>
            <h1>{dash.value}</h1>
          </div>
        ))}

        <div className={classes.charts}>
          <div className={classes["charts-header"]}>Charts Overview</div>
          <div className={classes.up}>
            <h6>Overview</h6>
            <div className={classes.tab}>
              <h6>
                Weekly{" "}
                <span style={{ marginLeft: 10 + "px" }}>
                  <ArrowIcon />
                </span>
              </h6>
            </div>
          </div>

          <Chart data={userData} />
          <div className={classes.sides}></div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
