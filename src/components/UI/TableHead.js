import classes from "./Table.module.css";
const TableHead = ({ thead }) => {
  return (
    <thead className={classes.thead}>
      <tr>
        {thead.map((th, index) => (
          <th key={index}>{th}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;
