import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import {Login} from "./components/pages/login";
import {Product} from "./components/pages/product";
import {ProductOverview} from "./components/pages/product-overview";

import './app.css';
import {Button} from 'antd';
import {Header} from "./components/parts/header";

function App() {
    return (
        <Router>
            <Header/>
            <div>
                <Route exact path="/" component={Login}/>
                <Route exact path="/product-overview" component={ProductOverview}/>
                <Route exact path="/product" component={Product}/>
            </div>
            <Button type="primary">Button</Button>
        </Router>
    );
}

export default App;
