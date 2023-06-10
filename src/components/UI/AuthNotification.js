import Button from "./Button";
import classes from "./AuthNotification.module.css";
const AuthNotification = ({
  title,
  paragraph,
  btnValue,
  btnType,
  children,
  onclick,
}) => {
  return (
    <>
      <div className={classes.header}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
      <div className={classes.img}>{children}</div>
      <Button value={btnValue} type={btnType} onClick={onclick} />
    </>
  );
};
export default AuthNotification;
