import classes from "./Feedback.module.css";
import img from "../assets/unsplash_TSZo17r3m0s.png";
import Reply from "./Reply";
import ReplyInput from "./ReplyInput";
import { useState } from "react";
const Feedback = () => {
  const [accordion, setAccordion] = useState(false);
  return (
    <>
      <div className={classes.feedback}>
        <li className={classes.list}>
          <div className={classes.image}>
            <img src={img} alt="image_" />
            <div className="detail">
              <h5>Bill Gate</h5>
              <small>02:00pm Today</small>
            </div>
            <i
              className="bi bi-star-fill"
              style={{ color: "var(--primary)" }}
            ></i>
            <i
              className="bi bi-star-fill"
              style={{ color: "var(--primary)" }}
            ></i>
            <i
              className="bi bi-star-fill"
              style={{ color: "var(--primary)" }}
            ></i>
            <i
              className="bi bi-star-fill"
              style={{ color: "var(--primary)" }}
            ></i>
          </div>
          <div className={classes.message}>
            <p>Message</p>
            <div className={classes.div}>
              <i className="bi bi-heart">
                <span>3</span>
              </i>
              <button onClick={() => setAccordion(!accordion)}>Reply</button>
            </div>
          </div>
        </li>
        {accordion && (
          <>
            <Reply />
            <ReplyInput />
          </>
        )}
      </div>
    </>
  );
};
export default Feedback;
