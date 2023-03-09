import img from "../assets/unsplash_TSZo17r3m0s.png";
import classes from "./Feedback.module.css";
const Reply = () => {
  return (
    <>
      <div className={classes.reply}>
        <div className={classes.image}>
          <img src={img} alt="image_" />
          <div className="detail">
            <h5>Bill Gate</h5>
            <small>02:00pm Today</small>
          </div>
          <i className="bi bi-star-fill" style={{ color: "red" }}></i>
          <i className="bi bi-star-fill" style={{ color: "red" }}></i>
          <i className="bi bi-star-fill" style={{ color: "red" }}></i>
          <i className="bi bi-star-fill" style={{ color: "red" }}></i>
        </div>
        <div className={classes.message}>
          <p>Message</p>
          <div className={classes.div}>
            <i className="bi bi-heart">
              <span>3</span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reply;
