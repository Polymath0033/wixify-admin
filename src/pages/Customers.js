import { useReducer } from "react";
import Feedback from "../components/Feedback";
import classes from "./Customers.module.css";
import { SearchIcon, FilterIcon } from "../components/icons.js";
import TooltipList from "../components/UI/TooltipList";
const initialState = {
  filterTab: false,
  expTab: false,
};
const reducer = (state, action) => {
  if (action.type === "filter_tab") {
    return { filterTab: state.filterTab ? false : true };
  } else if (action.type === "exp_tab") {
    return { expTab: state.expTab ? false : true };
  } else {
    throw new Error();
  }
};
const Customers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section className={classes.customers}>
      <h1 className={classes.h1}>Customers Feedback</h1>
      <ul className={classes.top}>
        {["All Positive", "Positive Feedback", "Critical Feedback"].map(
          (item) => (
            <li key={item}>{item}</li>
          )
        )}
      </ul>
      <div className="search-input">
        <div className="input-flex">
          <input type="search" name="search" id="search" placeholder="" />
          <i>
            <SearchIcon />
          </i>
        </div>
        <div className="search-button">
          <div>
            <button onClick={() => dispatch({ type: "filter_tab" })}>
              <i>
                <FilterIcon />
              </i>
              Filter
            </button>
            {state.filterTab && (
              <TooltipList
                list={[
                  { name: "relevant", title: "Most relevant" },
                  { name: "recent", title: "Most Recent" },
                ]}
              />
            )}
          </div>
          <div>
            <button onClick={() => dispatch({ type: "exp_tab" })}>
              <i className="bi bi-folder-plus"></i>
              Export
            </button>
            {state.expTab && (
              <TooltipList
                list={[
                  { name: "doc", title: ".DOCs" },
                  { name: "jpg", title: ".JPG" },
                  { name: "xlsx", title: ".XLSX" },
                ]}
              />
            )}
          </div>
        </div>
      </div>
      <ul className={classes.ul}>
        <Feedback />
      </ul>
    </section>
  );
};
export default Customers;
