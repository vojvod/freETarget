import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./layouts/home";
import Pistol from "./layouts/pistol";
import Rifle from "./layouts/rifle";

class Routes extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/pistol" component={Pistol}/>
            <Route path="/rifle" component={Rifle}/>
          </div>
        </Router>
    );
  }
}

export default Routes;
