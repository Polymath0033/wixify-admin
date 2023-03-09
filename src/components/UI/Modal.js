import { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";
const Modal = ({ toggleModal, children }) => {
  const Backdrop = ({ toggleModal }) => {
    return <div className={classes.backdrop} onClick={toggleModal}></div>;
  };
  const Overlay = () => {
    return (
      <dialog className={classes.dialog} open>
        {children}
      </dialog>
    );
  };
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop toggleModal={toggleModal} />,
        document.getElementById("backdrop")
      )}
      ,{ReactDom.createPortal(<Overlay />, document.getElementById("modal"))}
    </Fragment>
  );
};
export default Modal;
