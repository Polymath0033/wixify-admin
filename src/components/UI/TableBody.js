import { useState } from "react";
import { DotIcon } from "./icons";
import TooltipList from "./TooltipList";
const TableBody = ({ getPaginatedData }) => {
  const [show, setShow] = useState(false);
  const toggleIcon = () => {
    setShow((prev) => (prev = !prev));
  };
  return (
    <>
      {getPaginatedData().map((post) => (
        <tr key={post.id}>
          <td> {post.id}</td>
          <td>{post.title.slice(0, 6)}</td>
          <td>{post.title.slice(0, 6)}</td>
          <td>{post.title.slice(0, 6)}</td>
          {/* <td>{post.title.slice(0, 6)}</td> */}
          <td>
            {post.body.slice(0, 6)}
            <i onClick={toggleIcon}>
              <TooltipList
                show={show}
                list={[
                  { name: "profile", title: "View Profile" },
                  { name: "message", title: "Message Driver" },
                ]}
              />
              <DotIcon />
            </i>
          </td>
        </tr>
      ))}
    </>
  );
};
export default TableBody;
