import React from "react";
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <React.Fragment>
            <Link to="/">Login</Link>
            <Link to="/product-overview">Product Overview</Link>
            <Link to="/product">Product</Link>
        </React.Fragment>
    );
};
