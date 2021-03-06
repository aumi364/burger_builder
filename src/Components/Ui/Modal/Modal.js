import React from "react";
import classes from "./Modal.css";
import AUX from "../../../Hoc/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <AUX>
      <Backdrop show={props.show} close={props.closeBackdrop} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </AUX>
  );
};

export default Modal;
