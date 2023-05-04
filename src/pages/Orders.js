import { useReducer } from "react";
import classes from "./Orders.module.css";

import { useLoaderData } from "react-router-dom";
import TooltipList from "../components/UI/TooltipList";
import OrderTable from "../components/UI/OrderTable";
const initialState = {
  filterTab: false,
  expTab: false,
  filter_value: "",
  filter: (payload) => {},
};
const filterState = (payload) => {
  return { filter_value: payload };
};
const reducer = (state, action) => {
  if (action.type === "filter_tab") {
    return { filterTab: state.filterTab ? false : true };
  } else if (action.type === "exp_tab") {
    return { expTab: state.expTab ? false : true };
  } else if (action.type === "filter") {
    return filterState(action.payload);
  } else {
    throw new Error();
  }
};
const Orders = () => {
  const orders = useLoaderData();
  const [state, dispatch] = useReducer(reducer, initialState, filterState);

  return (
    <section className={classes.orders}>
      <h1 className={classes.h1}>
        All Orders<span>7000 orders</span>
      </h1>
      <ul className={classes.top}>
        {[
          { name: "All Orders", value: "" },
          { name: "Completed Order", value: "completed" },
          { name: "Orders in progress", value: "progress" },
          { name: "Cancelled Orders", value: "cancelled" },
        ].map((list, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch({ type: "filter", payload: list.value });
            }}
            className={state.filter_value === list.value ? classes.active : ""}
          >
            {list.name}
          </li>
        ))}
      </ul>
      <div className={classes["search-input"]}>
        <div className={classes["input-flex"]}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for order ID,customer,order status or something"
          />
          <i className="bi bi-search"></i>
        </div>
        <div className={classes["search-button"]}>
          <button
            onClick={() => {
              dispatch({ type: "filter_tab" });
            }}
          >
            <i className="bi bi-filter"></i>
            Filter
            {state.filterTab && (
              <TooltipList
                list={[
                  { name: "name", title: "Name" },
                  { name: "fee", title: "Order fee" },
                  { name: "id", title: "Order ID" },
                ]}
              />
            )}
          </button>
          <button
            onClick={() => {
              dispatch({ type: "exp_tab" });
            }}
          >
            <i className="bi bi-folder-plus"></i>
            Export
            {state.expTab && (
              <TooltipList
                list={[
                  { name: "doc", title: ".DOCs" },
                  { name: "jpg", title: ".JPG" },
                  { name: "xlsx", title: ".XLSX" },
                ]}
              />
            )}
          </button>
        </div>
      </div>

      <OrderTable posts={orders} dataLimit={10} pageLimit={10} />
    </section>
  );
};
export default Orders;
