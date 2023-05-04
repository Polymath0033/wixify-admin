import { useReducer, useState } from "react";
import Chart from "../components/Chart";
import { RidersIcon, RequestIcon } from "../components/icons";
import classes from "./Revenue.module.css";
import Withdraw from "../components/UI/Withdraw";
import Success from "../components/UI/Success";
import useNaira from "../Hooks/use-naira";
const years = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const initialState = {
  modal: false,
  alert: false,
};
const reducer = (state, action) => {
  if (action.type === "modal") {
    return { modal: state.modal ? false : true };
  } else if (action.type === "alert") {
    return { alert: state.alert ? false : true, modal: false };
  } else {
    throw new Error();
  }
};
const Revenue = () => {
  const { amountNaira } = useNaira();
  const data = [
    {
      title: "Total Rides",
      icon: <RidersIcon />,
      value: 45,
    },
    {
      title: "Total Rides Amount",
      icon: <RidersIcon />,
      value: amountNaira("10000000"),
    },
    {
      title: "Pending Rides",
      icon: <RequestIcon />,
      value: 25,
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
    labels: expenses.map((expense) => years[new Date(expense.date).getDay()]),
    color: "red",
    datasets: [
      {
        label: "Orders",
        data: expenses.map((datum) => datum.amount),
        backgroundColor: "#1AE198",
        width: 1200 + "px",
      },
    ],
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const [banks, setBanks] = useState([]);
  fetch("https://nigerianbanks.xyz")
    .then((res) => res.json())
    .then((data) => setBanks(data))
    .catch((e) => console.log(e));
  return (
    <section className={classes.revenue}>
      <div className={classes.top}>
        <h1>Revenue</h1>
        <button>
          <input type="date" name="date" />
        </button>
      </div>
      <article className={classes.article}>
        <div>
          <h2>{amountNaira("300000")}</h2>
          <p>Available Amount</p>
          <button
            className={classes.button}
            onClick={() => {
              dispatch({ type: "modal" });
            }}
          >
            Withdraw
          </button>
          {state.modal && (
            <Withdraw
              toggleModal={() => dispatch({ type: "modal" })}
              banks={banks}
              toggleAlert={() => {
                dispatch({ type: "alert" });
              }}
            />
          )}

          {state.alert && (
            <Success toggleAlert={() => dispatch({ type: "alert" })} />
          )}
        </div>
      </article>
      <div className={classes.grid}>
        {data.map((dash) => (
          <div className={classes.item} key={dash.title}>
            <i>{dash.icon}</i>
            <p>{dash.title}</p>
            <h1>{dash.value}</h1>
          </div>
        ))}
      </div>

      <div className={classes["charts-bar"]}>
        <div className={classes["charts-header"]}>Charts Overview</div>
        <div className={classes.up}>
          <h6>Overview</h6>
        </div>
        <Chart data={userData} />
      </div>
    </section>
  );
};
export default Revenue;
