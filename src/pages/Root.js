import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Aside from "../components/aside/Aside";

const Root = () => {
  return (
    <>
      <Header />

      <div className="section">
        <Aside />
        <main className="containers">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Root;
