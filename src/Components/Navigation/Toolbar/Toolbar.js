import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";


const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.MobileOnly} onClick={()=>props.isClicked(!props.drawerStatus)}>Menu</div>
      <Logo  height="80%" />

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
