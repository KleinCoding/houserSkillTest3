import React, {Component} from 'react';
// import axios from 'axios'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import StepOne from './stepOne'
import StepTwo from './stepTwo'
import StepThree from './stepThree'
import store, {HOUSE_CANCEL} from '../../store.js'


export default class Container extends Component {
    constructor() {
      super();
      this.state = {
        name: "",
        address:"",
        city:"",
        state:"",
        zipcode:null,
        img:"",
        mortgage: null,
        rent: null,
      };
    }
    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
          })
    }

    cancelHouse(){
        store.dispatch({
            type: HOUSE_CANCEL
          });
    }
    render() { 
        return (
               <div> <div>
                <div className="WizardApp">
                    <h2> This is the Wizard Page</h2>
                </div>
           
                </div>
              
                <Router>
            <Switch>
        <Route path="/Wizard/stepOne" component={StepOne} />
          <Route path="/Wizard/stepTwo/" component={StepTwo} />
          <Route path ="/Wizard/stepThree" component ={StepThree} />
            </Switch>
                {/* <Link to='/'>Cancel and return to the Dashboard</Link> */}
                <button onClick ={this.cancelHouse(),
                event => (window.location.href = "/#/")
                }>Cancel and return to the Dashboard</button>
                </Router>
                </div>
            )}

}