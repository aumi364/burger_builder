import React from "react";
import classes from "./BuildControl.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>
        {props.ingredientCount} * {props.label} - {props.ingredientPrice}$
      </div>
      <button
        className={classes.Less}
        onClick={props.less}
        disabled={props.disable}
      >
        less
      </button>
      <button className={classes.More} onClick={props.more}>
        more
      </button>
    </div>
  );
};

export default BuildControl;
