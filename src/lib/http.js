import { json } from "react-router-dom";
export const https = async (http, token, error_message) => {
  const response = await fetch(
    `https://wixify.uc.r.appspot.com/admin/${http}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    //throw new Error(`Failed to fetch ${error_message}`);
    return json({
      message: `Couldn't fetch ${error_message}`,
      status: 500,
    });
  } else {
    return data;
  }
};
