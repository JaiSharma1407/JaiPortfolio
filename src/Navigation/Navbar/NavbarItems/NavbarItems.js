import React from 'react';
import classes from './NavbarItems.css';
import NavbarItem from "./NavbarItem/NavbarItem";

const navbarItems = props => (
    <ul className={classes.NavbarItems}>
        <NavbarItem active>Home</NavbarItem>
        <NavbarItem>Web</NavbarItem>
        <NavbarItem>Games</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Resume</NavbarItem>
    </ul>
);

export default navbarItems;