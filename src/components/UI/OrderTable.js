import classes from "./Table.module.css";
import { useState } from "react";
import TableHead from "./TableHead";
import useTable from "../../Hooks/use-table";
import TableFooter from "./TableFooter";
const OrderTable = ({ posts, dataLimit, pageLimit }) => {
  const [pages] = useState(Math.round());
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
      <TableHead
        thead={[
          "Order ID",
          "Name",
          "Phone Number",
          "Order fee",
          "Order status",
          "Payment Option",
        ]}
      />
      <tbody className={classes.tbody}>
        {getPaginatedData().map((post) => (
          <tr key={post.id}>
            <td> {post.id}</td>
            <td>{post.title.slice(0, 6)}</td>
            <td>{post.title.slice(0, 6)}</td>
            <td
              style={{
                color:
                  post.status === "completed"
                    ? "#1AE198"
                    : post.status === "cancelled"
                    ? "#EB5757"
                    : post.status === "progress"
                    ? "#4C57E7"
                    : "#3A3A3A",
              }}
            >
              {post.title.slice(0, 6)}
            </td>
            <td>{post.body.slice(0, 6)}</td>
          </tr>
        ))}
      </tbody>
      <TableFooter
        nextPage={nextPage}
        prevPage={prevPage}
        pages={pages}
        getPaginationGroup={getPaginationGroup}
        currentPage={currentPage}
        changePage={changePage}
      />
    </table>
  );
};
export default OrderTable;
