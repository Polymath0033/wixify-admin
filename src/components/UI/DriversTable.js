import { useState } from "react";
import useTable from "../../Hooks/use-table";
import classes from "./Table.module.css";
import DriverTab from "./DriverTab";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";

const DriversTable = ({
  posts,
  dataLimit,
  pageLimit,
  head,
  setRoom,
  socket,
}) => {
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
      <TableHead thead={head} />
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
            <td>
              {post.body.slice(0, 6)}
              <DriverTab username={post.body.slice(0, 6)} />
            </td>
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
export default DriversTable;
