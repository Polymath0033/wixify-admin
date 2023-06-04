const http = "https://wixify.uc.r.appspot.com/admin/";
export const authApi = async (payload) => {
  const response = await fetch(`${http}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to authenticate");
  }
  return data;
};
//https://brainy-walkingstick.cyclic.app
//const { data } = loginApi();
