import React from "react";
import AUX from "../../Hoc/Auxilary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Layout = props => {
  return (
    <AUX>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </AUX>
  );
};
export default Layout;
