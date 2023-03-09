import classes from "./Button.module.css";
const Button = ({ value, type, onClick, children, submitting }) => {
  return (
    <button
      className={`${classes.button} ${submitting ? classes.active : ""}`}
      onClick={onClick}
      type={type || "button"}
    >
      {value}
      <>{children}</>
    </button>
  );
};
export default Button;
