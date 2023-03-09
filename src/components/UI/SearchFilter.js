import classes from "./SearchFilter.module.css";
import { SearchIcon, FilterIcon, ExportIcon } from "../icons";
import { useState } from "react";
import TooltipList from "./TooltipList";
const SearchFilter = (exportData, filterData, input, placeholder) => {
  const [filterTab, setFilterTab] = useState(false);
  const [exportTab, setExportTab] = useState();
  const toggleFiler = () => {
    setFilterTab(!filterTab);
  };
  // "Search for order ID,customer,order status or something"
  const toggleExp = () => {
    setExportTab(!exportTab);
  };
  return (
    <div className={classes.input}>
      <div className={classes["input-flex"]}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
        />
        <i>
          <SearchIcon />
        </i>
      </div>
      <div className={classes.button}>
        <button onClick={toggleFiler}>
          <i>
            <FilterIcon />
          </i>
          Filter
          {filterTab && <TooltipList list={filterData} />}
        </button>
        <button onClick={toggleExp}>
          <i>
            <ExportIcon />
          </i>
          Export
          {exportTab && <TooltipList list={exportData} />}
        </button>
      </div>
    </div>
  );
};
export default SearchFilter;
