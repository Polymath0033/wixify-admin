import { useState } from "react";
import useTable from "../../Hooks/use-table";

import classes from "./Table.module.css";
//

import Tab from "./Tab";
//import TableBody from "./TableBody";
const Table = ({ posts, dataLimit, pageLimit, head }) => {
  const [pages] = useState(Math.round(posts.length / dataLimit));
  const {
    getPaginatedData,
    getPaginationGroup,
    currentPage,
    nextPage,
    prevPage,
    changePage,
  } = useTable(posts, dataLimit, pageLimit);

  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr>
          {head.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {/* <TableBody getPaginatedData={getPaginatedData} /> */}
        {getPaginatedData().map((post) => (
          <tr key={post.id}>
            <td> {post.id}</td>
            <td>{post.title.slice(0, 6)}</td>
            <td>{post.title.slice(0, 6)}</td>
            <td>{post.title.slice(0, 6)}</td>
            <td>
              {post.body.slice(0, 6)}
              <Tab />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className={classes["footer-row"]}>
          <td
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
            onClick={prevPage}
          >
            <i className="bi bi-arrow-left"></i>
            Previous
          </td>
          <td className={classes.numbers}>
            <tr>
              {getPaginationGroup().map((page, index) => (
                <td
                  key={index}
                  onClick={changePage}
                  className={currentPage === page ? classes.active : null}
                >
                  {page}
                </td>
              ))}
            </tr>
          </td>
          <td
            className={`next ${currentPage === pages ? "disabled" : ""}`}
            onClick={nextPage}
          >
            Next
            <i className="bi bi-arrow-right"></i>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
export default Table;
