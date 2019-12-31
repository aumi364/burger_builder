import React from "react";
import AUX from "../../Hoc/Auxilary";
import classes from "./Layout.css";
const Layout = props => {
  return (
    <AUX>
      <div>Toolbar,SideDrawer,Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </AUX>
  );
};
export default Layout;
