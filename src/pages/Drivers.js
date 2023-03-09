import { useState } from "react";
import classes from "./Drivers.module.css";
import Table from "../components/UI/Table";
import { SortIcon } from "../components/icons";
import TooltipList from "../components/UI/TooltipList";
import { json, useLoaderData } from "react-router-dom";

const Drivers = () => {
  const [tab, showTab] = useState(false);
  const posts = useLoaderData();
  if (posts.isError === true) {
    <p>{posts.message}</p>;
  }
  const toggleTab = () => {
    showTab((prev) => (prev = !prev));
  };
  const thead = [
    "Name",
    "Phone Number",
    "Total Rides",
    "Status Rides",
    "Total Amount Made",
  ];
  return (
    <section className={classes.drivers}>
      <div className={classes.top}>
        <h1 className={classes.h1}>
          Drivers<span>7000 drivers</span>
        </h1>
        <div>
          <button onClick={toggleTab}>
            <i>
              <SortIcon />
            </i>
            sort
          </button>

          {tab && (
            <TooltipList
              list={[
                { title: "Name A - Z", name: "name" },
                { title: "Highest Rides", name: "ride" },
                { title: "Highest amount made", name: "amount" },
              ]}
            />
          )}
        </div>
      </div>
      <Table posts={posts} dataLimit={10} pageLimit={10} head={thead} />
    </section>
  );
};
export default Drivers;
export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    return json(
      { message: "couldn't fetch the driver's data" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
