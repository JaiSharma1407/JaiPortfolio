import React from 'react';
import classes from './NavbarItem.css';

const navigationItem = props => (
    <li className={classes.NavbarItem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;