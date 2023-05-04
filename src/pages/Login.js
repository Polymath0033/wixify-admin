import { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import Button from "../components/UI/Button";
import { EyeSlash } from "../components/icons";
import { Eye } from "../components/icons";
import AuthContext from "../store";
import { authApi } from "../lib/auth";

let formIsValid = false;

const Login = () => {
  const authContext = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [type, setType] = useState("password");

  const validateForm = () => {
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      formIsValid = true;
      return;
    }
  };
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    validateForm();
    formIsValid = false;
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      setIsLoading(true);
      const data = await authApi(payload);
      authContext.login(data.token);
      if (!error) {
        navigate("/admin");
      }
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };
  return (
    <>
      <div className={classes.header}>
        <h1>Sign in to Wixify</h1>
        <p>Welcome back! Please enter your details</p>
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
            placeholder="E-mail Address"
            ref={emailRef}
          />
          <label htmlFor="email">E-mail Address</label>
        </div>
        <div className={classes["form-password"]}>
          <input
            type={type}
            name="password"
            required
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <label htmlFor="password">Password</label>
          <i onClick={() => setType(type === "password" ? "text" : "password")}>
            {type === "password" ? <EyeSlash /> : <Eye />}
          </i>
        </div>
        {formIsValid && (
          <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
            Check your input and fill it appropriately
          </p>
        )}
        <Button type="submit" submitting={isLoading} value="Login">
          {isLoading && <div className={classes.loading}></div>}
        </Button>
        <Link to="/reset-password">Forget password?</Link>
      </form>
    </>
  );
};

export default Login;
