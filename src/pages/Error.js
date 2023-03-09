import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong!";
  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }
  if (error.status === 401) {
    title = "Not Found";
    message = "couldn't find resources or page";
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
