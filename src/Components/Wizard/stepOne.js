import React, { Component } from "react";
import store, {HOUSE_NAME, HOUSE_ADDRESS, HOUSE_CITY, HOUSE_STATE, HOUSE_ZIP} from "../../store.js";
import axios from "axios";
// import {HashRouter as Router, Link} from 'react-router-dom'



export default class Container extends Component {
  constructor() {
    const reduxState = store.getState();

    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      house_state: "",
      zipcode: null,
    };
  }
  handleNameChange(element) {
    this.setState({
      name: element,
    });
  }

  handleAddressChange(element) {
    this.setState({
      address: element,
    });
  }

  handleCityChange(element) {
    this.setState({
      city: element,
    });
  }
  handleZipChange(element) {
    this.setState({
      zipcode: element,
    });
  }
  handleStateChange(element) {
    this.setState({
      house_state: element,
    });
  }




  setStateStepOne() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: HOUSE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: HOUSE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: HOUSE_STATE,
      payload: this.state.house_state
    });
    store.dispatch({
      type: HOUSE_ZIP,
      payload: this.state.zipcode
    });
  }



  setStateName() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_NAME,
      payload: this.state.name
    });
  }
  setStateAddress() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_ADDRESS,
      payload: this.state.address
    });
  }
  setStateCity() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_CITY,
      payload: this.state.city
    });
  }
  setStateZip() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_ZIP,
      payload: this.state.zipcode
    });
  }
  setStateState() {
    // Send data to Redux state
    store.dispatch({
      type: HOUSE_STATE,
      payload: this.state.house_state
    });
  }

//   componentDidMount() {
//     store.subscribe(() => {
//       const reduxState = store.getState();
//       this.setState({
//         name: reduxState.name,
//         address: reduxState.address,
//         city: reduxState.city,
//         state: reduxState.state,
//         zipcode: reduxState.zipcode,
//         img: reduxState.img,
//         mortgage: reduxState.mortgage,
//         rent: reduxState.rent
//       });
//     });
//   }

  render() {
    const detail = ({match}) => {console.log('match', match)}
    return (
      <div>
        
        <div>
          <div className="StepOne">
            <h2> This is step one!</h2>
          </div>
        </div>
        <input
          name="nameInput"
          className="form-control"
          id="nameInput"
          placeholder="Name"
          onChange={e => this.handleNameChange(e.target.value)}
        ></input>
        <input
          name="addressInput"
          className="form-control"
          id="addressInput"
          placeholder="Address"
          onChange={e => this.handleAddressChange(e.target.value)}
        ></input>
        <input
          name="cityInput"
          className="form-control"
          id="cityInput"
          placeholder="City"
          onChange={e => this.handleCityChange(e.target.value)}
        ></input>
        <input
          name="stateInput"
          className="form-control"
          id="stateInput"
          placeholder="State"
          onChange={e => this.handleStateChange(e.target.value)}
        ></input>
        <input
          name="zipcodeInput"
          className="form-control"
          id="zipcodeInput"
          placeholder="Zip Code"
          onChange={e => this.handleZipChange(e.target.value)}
        ></input>
<button onClick={this.setStateName(),this.setStateAddress(),
this.setStateCity(),this.setStateZip(), this.setStateState(),


// event => (window.location.href = `/#${this.props.match.url}/../stepTwo/`)
event => (window.location.href = "/#/Wizard/stepTwo")
    }>
          Next Step
        </button>
        <button onClick={() => {
            console.log("Pushing house to DB",)
            this.setStateStepOne()
            this.setStateCity()
            const reduxState = store.getState();
            axios.post('/api/houses', {
              house_name: reduxState.name,
              house_address: reduxState.address,
              city: reduxState.city,
              house_state: reduxState.house_state,
              zip: reduxState.zipcode,

            }
            
            )
            .catch(err => {
              console.log(err);
            });
          
            
          }
          }>Complete and save to DB!</button>
      </div>
    );
  }
}
