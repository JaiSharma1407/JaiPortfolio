import React from "react";
import Avatar from "../Avatar/Avatar";

import classes from './Intro.css';

const intro = props => (
    <div className={classes.Intro}>
        <span>Jai Sharma</span>
        <p className={classes.Tagline}>The odyssey of a game programmer</p>
        <div className={classes.Avatar}>
            <Avatar/>
        </div>
        <div className={classes.IntroText}>
            <p>Welcome to my portfolio</p>
            <p>I am a game programmer with experience in front-end technologies.</p>
        </div>
    </div>
);

export default intro;