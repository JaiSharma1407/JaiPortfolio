import React, {Component} from 'react';
import Aux from '../../HOC/Auxilary/Auxilary';
import Navbar from "../../Navigation/Navbar/Navbar";

import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navbar/>
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;