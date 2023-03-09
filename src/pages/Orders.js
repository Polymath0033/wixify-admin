//import { useState } from "react";
//import { useEffect } from "react";

import classes from "./Orders.module.css";
import Table from "../components/UI/Table";
//import { ExportIcon, FilterIcon, SearchIcon } from "../components/icons";
import { useLoaderData } from "react-router-dom";
import SearchFilter from "../components/UI/SearchFilter";

const Orders = () => {
  const posts = useLoaderData();

  const thead = [
    "Order ID",
    "Name",
    "Phone Number",
    "Order fee",
    "Order status",
    "Payment Option",
  ];
  return (
    <section className={classes.orders}>
      <h1 className={classes.h1}>
        All Orders<span>7000 orders</span>
      </h1>
      <ul className={classes.top}>
        <li>All Orders</li>
        <li>Completed Orders</li>
        <li>Orders in progress</li>
        <li>Cancelled Orders</li>
      </ul>
      <SearchFilter />
      <Table posts={posts} dataLimit={10} pageLimit={10} head={thead} />
    </section>
  );
};
export default Orders;
