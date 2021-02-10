import React from 'react';
import avatarSrc from '../../Assets/Images/avatar.jpg';
import classes from "./Avatar.css";

const avatar = props => (
    <div>
        <img alt="Jai Sharma Avatar" src={avatarSrc} className={classes.Avatar}/>
    </div>
);
export default avatar;