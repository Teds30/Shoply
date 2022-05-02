import React from "react";

import classes from "./PrimaryButton.module.css";

const PrimaryButton = (props) => {
    return (
        <button
            className={classes.primarybutton}
            style={{ width: props.width }}
            onClick={props.onClick}
            type={props.submit}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default PrimaryButton;
