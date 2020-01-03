import React, {Component} from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import axios from 'axios'
import House from '../House/House'

export default class Container extends Component {
    constructor() {
      super();
      this.state = {
        housesArr: [],
      };


    }


    deleteHouse(element){
        axios.delete(`/api/houses/${element.id}`)
        .catch(err => {
          console.log(err, "Error in deleteHouse! coded in Dashboard");
        });
    }

    componentDidMount() {
        axios.get("/api/houses").then(response => {
            this.setState({ housesArr: response.data });
          });


    }
    render(){


  return (
    <div>
      <div className="DashboardApp">
        <h2> This is the Dashboard Page</h2>
        <ul>
<div classname ="housesCountainer">
   
</div>




          <Router>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/Wizard">Wizard</Link>
            </li>
            <li>
              <Link to="/Header">Header</Link>
            </li>
            <li>
              <Link to="/House">House</Link>
            </li>
            <li>
              <Link to="/ohnelly">404 now yall</Link>
            </li>
            <div>
            {/* <button onClick={
event => (window.location.href = `localhost:3000/#/${this.props.match.url}/Wizard/stepOne`)

    }>
          Add a Property!
        </button> */}
            <Link to='/Wizard/stepOne'>Add New Property!</Link>
        </div>  
        <House housesArr = {this.state.housesArr} deleteHouse={this.deleteHouse}
    />
        </Router>
        </ul>
      </div>
    </div>
  );
}}
