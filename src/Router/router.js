import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from '../Pages/Home/Home';
import Detail from '../Pages/Detail/Detail';

const Routing = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/search/:s">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routing;