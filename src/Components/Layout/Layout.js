import React,{Component} from "react";
import AUX from "../../Hoc/Auxilary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"
export default class Layout extends Component {
    state={
        showSideDrawer :false
    };
    sideDrawerClosedHandler=()=>{
        this.setState({
            showSideDrawer:false
        })
    };
    toolbButtonhandler=(bool)=>{
        this.setState({
            showSideDrawer:bool
        })
    };
    render(){
        return (
            <AUX>
                <Toolbar isClicked={this.toolbButtonhandler} drawerStatus={this.state.showSideDrawer}/>
                <SideDrawer open={this.state.showSideDrawer}  closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>{this.props.children}</main>
            </AUX>
        );
    }

};

