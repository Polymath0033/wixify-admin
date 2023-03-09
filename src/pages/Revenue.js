import { useContext, useEffect, useState } from "react";
import Chart from "../components/Chart";
import { RidersIcon, RequestIcon } from "../components/icons";
import classes from "./Dashboard.module.css";
import classes_ from "./Revenue.module.css";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import Cancel from "../components/UI/Cancel";
import AuthContext from "../store";
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
const Revenue = () => {
  const data = [
    {
      title: "Total Rides",
      icon: <RidersIcon />,
      value: 45,
    },
    {
      title: "Total Rides Amount",
      icon: <RidersIcon />,
      value: Number("10000000").toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      }),
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

  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const toggleModal = () => {
    setModal((prev) => (prev = !prev));
  };
  const { token } = useContext(AuthContext);
  console.log(token);
  useEffect(() => {
    fetch("https://brainy-walkingstick.cyclic.app/admin/grant", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  });

  // useEffect(() => {
  //   fetch("https://api.flutterwave.com/v3/banks/NG", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer FLWSECK_TEST-1a2164d007ed79532733105a756cd5b8-X`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log(e));
  // });
  const availableAmount = Number("300000").toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
  });
  const toggleAlert = () => {
    setModal(false);
    setAlert((prev) => (prev = !prev));
  };
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
          <h2>{availableAmount}</h2>
          <p>Available Amount</p>
          <button onClick={toggleModal}>Withdraw</button>
          {modal && (
            <Modal toggleModal={toggleModal}>
              <form className={classes_.form}>
                <p className={classes_["modal-header"]}>Enter your details</p>
                <input
                  type="text"
                  name="holder_name"
                  id="holder_name"
                  placeholder="Bank account's holder name"
                />
                <input
                  type="text"
                  name="account_name"
                  id="account_name"
                  placeholder="Bank account Number"
                />
                <select name="bank_name" id="bank_name" placeholder="Bank Name">
                  <option value="Bank Name">Bank Name</option>
                </select>
                <Button value={"Proceed"} onClick={toggleAlert} />
                <Cancel value={"cancel"} onClick={toggleModal} />
              </form>
            </Modal>
          )}
          {alert && (
            <Modal toggleModal={toggleAlert}>
              <div className={classes_.alert}>
                <div className={classes_.loading}></div>
                <h5>Great Wittig</h5>
                <p>You've successfully Withdrawn N5000 from your account</p>
              </div>
              <Button value={"Back"} onClick={toggleAlert} />
            </Modal>
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
