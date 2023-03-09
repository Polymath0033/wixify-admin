import classes from "./Notification.module.css";
const Notification = () => {
  return (
    <>
      <h2 className={classes.header}>Notification</h2>
      <ul className={classes.list}>
        <li>
          <h4>Withdrawal success</h4>
          <p>
            Abdurrazzaq Abdulmuhsin has request a withdrawal of $2000 from his
            earnings
          </p>
          <div className={classes.btn}>
            <button>Approve</button>
            <button>success</button>
          </div>
          <div className={classes.side}>
            <p>1:00 PM at March 14, 2022</p>
            <div className={classes.cancel}>X</div>
          </div>
        </li>
        <li>Lists</li>
        <li>Lists</li>
      </ul>
    </>
  );
};

export default Notification;
