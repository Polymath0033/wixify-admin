import { useState } from "react";
let message = "";
const useAuth = (url, methods, errorValue) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const submitForm = async (payloads) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: methods,
        body: JSON.stringify(payloads),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || errorValue);
      }

      console.log(data);
      message = data.token;
      console.log(data);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return {
    isLoading,
    error,
    submitForm,
    message,
    setError,
  };
};
export default useAuth;
