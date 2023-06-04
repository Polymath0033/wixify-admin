import classes from "./Auth.module.css";
import { EyeSlash } from "../components/icons";
import { Eye } from "../components/icons";
import { useContext, useRef, useState } from "react";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store";
//import useAuth from "../Hooks/use-auth";
let isConfirm = false;
let formIsValid = false;

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [pType, setPType] = useState("password");
  const [cType, setCType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();
  const confirmHandler = (e) => {
    setConfirm(e.target.value);
    if (passwordRef.current.value !== e.target.value) {
      isConfirm = true;
    } else {
      isConfirm = false;
    }
  };

  const validateForm = () => {
    if (
      firstNameRef.current.value.trim() === "" ||
      lastNameRef.current.value.trim() === "" ||
      emailRef.current.value.includes("@") ||
      passwordRef.current.value.trim() === "" ||
      passwordRef.trim() !== confirm.trim()
    ) {
      formIsValid = true;
      return;
    }
  };
  // const { isLoading, error, submitForm } = useAuth(
  //   "https://brainy-walkingstick.cyclic.app/admin/register",
  //   "POST",
  //   "Failed to Authenticate"
  // );
  const submitHandler = async (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    validateForm();
    formIsValid = false;
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://wixify.uc.r.appspot.com/admin/register",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText || "Failed to authenticate");
      }
      navigate("/admin");
      const data = await response.json();
      authContext.login(data.token);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };
  return (
    <>
      <div className={classes.header}>
        <h1>Create an account with wixify</h1>
        <p>Hey! set up your account to embark on this journey</p>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        {error && (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
            Failed to authenticate
          </p>
        )}
        <div className={classes["form-control"]}>
          <input
            type="text"
            placeholder="First Name"
            name="first-name"
            required
            id="first-name"
            ref={firstNameRef}
          />
          <label htmlFor="first-name">First Name</label>
        </div>
        <div className={classes["form-control"]}>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
            id="last-name"
            ref={lastNameRef}
          />
          <label htmlFor="last-name">Last Name</label>
        </div>
        <div className={classes["form-control"]}>
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="E-mail Address"
            ref={emailRef}
          />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className={classes["form-password"]}>
          <input
            type={pType}
            name="password"
            required
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <label htmlFor="password">Password</label>
          <i
            onClick={() => setPType(pType === "password" ? "text" : "password")}
          >
            {pType === "password" ? <EyeSlash /> : <Eye />}
          </i>
        </div>
        <div
          className={`${classes["form-password"]} ${
            isConfirm ? classes["is-confirm"] : ""
          }`}
        >
          <input
            type={cType}
            name="confirm-password"
            required
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={confirmHandler}
          />
          <label htmlFor="confirm-password">Confirm password</label>
          <i
            onClick={() => setCType(cType === "password" ? "text" : "password")}
          >
            {cType !== "password" ? <Eye /> : <EyeSlash />}
          </i>
        </div>

        {formIsValid && (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
            Check your input and fill it appropriately
          </p>
        )}
        <Button type="submit" submitting={isLoading} value="Create an Account">
          {isLoading && <div className={classes.loading}></div>}
        </Button>
      </form>
    </>
  );
};
export default SignUp;
