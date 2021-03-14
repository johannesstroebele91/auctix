import React from "react";
import {Link} from 'react-router-dom'
import './products-overview.css';

export const ProductsOverview = () => {
    return (
        <div>
            <h1>Product Overview</h1>
            <div className="products-distribution">
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
                <span><Link to="/product">Product</Link></span>
            </div>
        </div>
    );
};
