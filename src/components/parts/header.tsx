import React from "react";
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <React.Fragment>
            <h1>Navigation</h1>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/product-overview">Product Overview</Link></li>
            </ul>
        </React.Fragment>
    );
};
