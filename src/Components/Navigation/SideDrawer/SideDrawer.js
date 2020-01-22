import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from './SideDrawer.css'
import Backdrop from "../../Ui/Backdrop/Backdrop"
import Aux from "../../../Hoc/Auxilary"

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];

        if(props.open){
            attachedClasses=[classes.SideDrawer,classes.Open]
        }

    return (
        <Aux>
            <Backdrop show={props.open} close={props.closed} />
        <div className={attachedClasses.join(' ')}>
            <Logo height={"10%"}/>
            <nav>
                <NavigationItems/>

            </nav>

        </div>
        </Aux>
    );
};

export default SideDrawer;