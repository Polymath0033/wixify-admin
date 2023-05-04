import { useState } from "react";
import RouteList from "./RouteList";
const DriverTab = ({ username }) => {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    setShow((prev) => (prev = !prev));
  };

  return (
    <>
      <i className="bi bi-three-dots-vertical" onClick={toggleShow}></i>

      {show && (
        <RouteList
          routes={[
            { to: "/drivers/driver", title: "View Profile" },
            { to: `/drivers/${username}/chat`, title: "Message Driver" },
          ]}
        />
      )}
    </>
  );
};
export default DriverTab;
