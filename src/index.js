// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import {Switch, Route } from 'react-router-dom';
import {HashRouter as Router} from 'react-router-dom';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';

ReactDOM.render(
    <div><Header />
  <Router>
    <div>
      <nav>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/House" component={House} />
          <Route path="/Wizard" component={Wizard} />
          <Route path ="/Header" component ={Header} />
          <Route render={() => <h1>404 real smooth, 404 now y'all! </h1>} />
        </Switch>
      </nav>
    </div>

  </Router>
  
  
  </div>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
