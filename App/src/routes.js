import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./layouts/home";
import Pistol from "./layouts/pistol";
import Rifle from "./layouts/rifle";
import Users from "./layouts/users";
import Shooters from "./layouts/shooters";
import History from "./layouts/history";

class Routes extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/pistol" component={Pistol}/>
                    <Route path="/rifle" component={Rifle}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/shooters" component={Shooters}/>
                    <Route path="/history" component={History}/>
                </div>
            </Router>
        );
    }
}

export default Routes;
