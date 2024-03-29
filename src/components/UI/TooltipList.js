import classes from "./TooltipList.module.css";
const TooltipList = ({ list }) => {
  return (
    <>
      <ul className={classes.list}>
        {list.map((li) => (
          <li key={li.name}>{li.title}</li>
        ))}
      </ul>
    </>
  );
};
export default TooltipList;
