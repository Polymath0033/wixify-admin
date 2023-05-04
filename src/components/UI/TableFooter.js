import classes from "./Table.module.css";
const TableFooter = ({
  currentPage,
  prevPage,
  nextPage,
  getPaginationGroup,
  changePage,
  pages,
}) => {
  return (
    <tfoot>
      <tr className={classes["footer-row"]}>
        <td
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => {
            prevPage();
          }}
        >
          <i className="bi bi-arrow-left"></i>
          Previous
        </td>
        <td className={classes.numbers}>
          <tr>
            {getPaginationGroup().map((page, index) => (
              <td
                key={index}
                onClick={() => {
                  changePage(page);
                }}
                className={currentPage === page ? classes.active : null}
              >
                {page}
              </td>
            ))}
          </tr>
        </td>
        <td
          className={`next ${currentPage === pages ? "disabled" : ""}`}
          onClick={() => {
            nextPage();
          }}
        >
          Next
          <i className="bi bi-arrow-right"></i>
        </td>
      </tr>
    </tfoot>
  );
};
export default TableFooter;
