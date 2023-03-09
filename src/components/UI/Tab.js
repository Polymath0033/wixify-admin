import { useState } from "react";
import TooltipList from "./TooltipList";

const Tab = () => {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.target);
    setShow((prev) => (prev = !prev));
  };
  return (
    <>
      <i class="bi bi-three-dots-vertical" onClick={toggleShow}></i>
      {show && (
        <TooltipList
          list={[
            { name: "profile", title: "View Profile" },
            { name: "message", title: "Message Driver" },
          ]}
        />
      )}
    </>
  );
};
export default Tab;
