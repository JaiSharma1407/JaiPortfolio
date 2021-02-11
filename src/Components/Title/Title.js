import React from "react";
import classes from './Title.css';

const title = props => (
    <div className={classes.Title}>
        <p className={classes.Header}>{props.children}</p>
        <p className={classes.Tagline}>{props.tagline}</p>
    </div>
);

export default title;