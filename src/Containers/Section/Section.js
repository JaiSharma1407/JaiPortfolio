import React from 'react';
import classes from './Section.css';

const section = props => (
    <div className={classes.Section}>
        {props.children}
    </div>
);

export default section;