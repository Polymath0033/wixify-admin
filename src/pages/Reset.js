import { useRef, useState } from "react";
import AuthNotification from "../components/UI/AuthNotification";
import classes from "../pages/Auth.module.css";
import { Eye, EyeSlash } from "../components/icons";
import { useNavigate } from "react-router-dom";
const Reset = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const tokenRef = useRef();
  const navigate = useNavigate();

  const [pType, setPType] = useState("password");
  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      token: tokenRef.current.value,
    };
    try {
      const response = await fetch(
        "https://brainy-walkingstick.cyclic.app/admin/reset-password",
        {
          method: "",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to modified");
      } else {
        navigate("/success");
      }
    } catch (e) {}
  };
  return (
    <AuthNotification
      title="Reset your Password"
      btnValue="Reset Password"
      btnType="submit"
      paragraph=""
    >
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail Address"
            ref={emailRef}
            required
          />
          <label htmlFor="email">E-mail Address</label>
        </div>
        <div className={classes["form-password"]}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <label htmlFor="password">Password</label>
          <i
            onClick={() => setPType(pType === "password" ? "text" : "password")}
          >
            {pType !== "password" ? <Eye /> : <EyeSlash />}
          </i>
        </div>
        <div className={classes["form-control"]}>
          <input
            type="text"
            name="reset-token"
            id="reset-token"
            placeholder="Rest Token"
            ref={tokenRef}
            required
          />
          <label htmlFor="reset-token">Reset Token</label>
        </div>
      </form>
    </AuthNotification>
  );
};
export default Reset;
