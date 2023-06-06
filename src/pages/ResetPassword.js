import { useRef, useState } from "react";
import classes from "./Auth.module.css";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = { email: emailRef.current.value };
    console.log(payload);
    try {
      console.log(payload);
      setLoading(true);
      const response = await fetch(
        "https://wixify.uc.r.appspot.com/admin/forgot-password",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed ");
      } else {
        navigate("/forget-password");
      }
    } catch (e) {
      setLoading(false);
      setError(e);
      console.log(e);
    }
  };
  return (
    <>
      <div className={classes.header}>
        <h1>Forget password</h1>
        <p>Enter your email address to recover your password</p>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        {error && (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
            Failed to authenticate
          </p>
        )}
        <div className={classes["form-control"]}>
          <input
            type="email"
            name="email"
            id="email"
            required
            ref={emailRef}
            placeholder="E-mail Address"
          />
        </div>
        <Button type="submit" submitting={loading} value="Reset">
          {loading && <div className={classes.loading}></div>}
        </Button>
      </form>
    </>
  );
};

export default ResetPassword;
