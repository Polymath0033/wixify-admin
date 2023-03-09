import Chat from "../components/Chat";
//import { useState } from "react";
//import Feedback from "../components/Feedback";
//import SearchFilter from "../components/UI/SearchFilter";
//import classes from "./Customers.module.css";
//import { SearchIcon, FilterIcon, ExportIcon } from "../components/icons.js";
//import TooltipList from "../components/UI/TooltipList";
const Customers = () => {
  // const [filterTab, setFilterTab] = useState(false);
  // const [exportTab, setExportTab] = useState();
  // const toggleFiler = () => {
  //   setFilterTab(!filterTab);
  // };
  // "Search for order ID,customer,order status or something"
  // const toggleExp = () => {
  //   setExportTab(!exportTab);
  // };
  return (
    <Chat />
    // <section className={classes.customers}>
    //   <h1 className={classes.h1}>Customers Feedback</h1>
    //   <ul className={classes.top}>
    //     {["All Positive", "Positive Feedback", "Critical Feedback"].map(
    //       (item) => (
    //         <li key={item}>{item}</li>
    //       )
    //     )}
    //   </ul>
    //   <div className="search-input">
    //     <div className="input-flex">
    //       <input type="search" name="search" id="search" placeholder="" />
    //       <i>
    //         <SearchIcon />
    //       </i>
    //     </div>
    //     <div className="search-button">
    //       <div>
    //         <button onClick={toggleFiler}>
    //           <i>
    //             <FilterIcon />
    //           </i>
    //           Filter
    //         </button>
    //         {filterTab && (
    //           <TooltipList
    //             list={[
    //               { name: "doc", title: ".DOCs" },
    //               { name: "jpg", title: ".JPG" },
    //               { name: "xlsx", title: ".XLSX" },
    //             ]}
    //           />
    //         )}
    //       </div>
    //       <div>
    //         <button onClick={toggleExp}>
    //           <i>
    //             <ExportIcon />
    //           </i>
    //           Export
    //         </button>
    //         {exportTab && (
    //           <TooltipList
    //             list={[
    //               { name: "relevant", title: "Most relevant" },
    //               { name: "recent", title: "Most Recent" },
    //             ]}
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   <ul className={classes.ul}>
    //     <Feedback />
    //   </ul>
    // </section>
  );
};
export default Customers;
