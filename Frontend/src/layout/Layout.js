import React from "react";
import classes from "./layout.module.css";
import Navigation from "../components/Navbar";

const LayOut = (props)=>{
    return(
        <div className={classes.layout}>
            <Navigation/>
            <main>{props.children}</main>
        </div>
    )
}
export default LayOut