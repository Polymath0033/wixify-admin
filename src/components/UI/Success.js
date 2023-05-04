import classes from "./Withdraw.module.css";
import Button from "./Button";
const Success = ({ toggleAlert }) => {
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          toggleAlert();
        }}
      ></div>
      <dialog open className={classes.dialog}>
        <div>
          <div className={classes.alert}>
            <div className={classes.loading}></div>
            <h5>Great Wittig</h5>
            <p>You've successfully Withdrawn N5000 from your account</p>
          </div>
          <Button
            value={"Back"}
            onClick={() => {
              toggleAlert();
            }}
          />
        </div>
      </dialog>
    </>
  );
};
export default Success;
