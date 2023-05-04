import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../components/UI/Button";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1);
  };

  let title = "An error occurred";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 401) {
    title = "Not Found";
    message = "couldn't find resources or page";
  }
  if (error.status === 404) {
    title = "Page Not Found!";
    message = "This page doesn't exist press the back button to go back";
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1 + "rem",
        height: 100 + "vh",
        alignItems: "center",
      }}
    >
      <div style={{ width: 60 + "%", textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: "#eb5757" }}>{title}</h1>
        <p>{message}</p>

        <Button
          value={"Go Back"}
          onClick={() => {
            navigateHandler();
          }}
        />
      </div>
    </div>
  );
};

export default Error;
