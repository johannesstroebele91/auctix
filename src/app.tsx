import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import {Login} from "./components/pages/login";
import {ProductView} from "./components/pages/product-view";
import {ProductsOverview} from "./components/pages/products-overview";

import './app.css';
import {Header} from "./components/parts/header";

function App() {
    return (
        <Router>
            <Header/>
            <div>
                <Route exact path="/" component={Login}/>
                <Route exact path="/product-overview" component={ProductsOverview}/>
                <Route exact path="/product" component={ProductView}/>
            </div>
        </Router>
    );
}

export default App;
