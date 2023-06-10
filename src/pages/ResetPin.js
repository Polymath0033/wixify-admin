import { useRef, useState, useEffect } from "react";
import Button from "../components/UI/Button";
import classes from "./ResetPin.module.css";
let currentOTP = 0;
const ResetPin = () => {
  const inputRef = useRef();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOtp, setActiveOtp] = useState(0);
  const [isError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const changeHandler = (e) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[currentOTP] = value.substring(value.length - 1);
    if (!value) {
      setActiveOtp(currentOTP - 1);
    } else {
      setActiveOtp(currentOTP + 1);
    }
    setOtp(newOtp);
  };
  const handleKeyDown = ({ key }, index) => {
    currentOTP = index;
    if (key === "Backspace") {
      setActiveOtp(currentOTP - 1);
    }
  };
  const token = localStorage.getItem("token");
  const proceedButton = async (e) => {
    e.preventDefault();
    console.log();
    const payload = {
      token: token,
      otp: otp.join("").toUpperCase(),
      password: "olosanyusuf",
    };
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://wixify.uc.r.appspot.com/admin/reset-password",
        {
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Failed to verified");
      }
      const data = await response.json();
      if (!data.success) {
        throw new Error("Failed to verified");
      }
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <form>
      <div className={classes.form}>
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            value={otp[index]}
            onChange={changeHandler}
            ref={activeOtp === index ? inputRef : null}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <Button
        value={"proceed"}
        submitting={isLoading}
        onClick={proceedButton}
      />
    </form>
  );
};
export default ResetPin;
