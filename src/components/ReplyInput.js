import classes from "./Feedback.module.css";
const ReplyInput = () => {
  return (
    <div className={classes.input}>
      <p>
        Replying to <span className={classes.name}>Bill Gate</span>{" "}
      </p>
      <input type="text" />
      <button>
        <i className="bi bi-reply-fill"></i>reply
      </button>
    </div>
    // </div>
  );
};
export default ReplyInput;
