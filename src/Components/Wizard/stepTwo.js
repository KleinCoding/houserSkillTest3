import React, {Component} from 'react';
import store, {HOUSE_IMG }from '../../store.js'
import axios from 'axios'
// import {HashRouter as Router, Link} from 'react-router-dom'

export default class Container extends Component {
    constructor() {
      super();
      this.state = {
        img:"",

      };

    }

    setStateIMG() {
        // Send data to Redux state
        store.dispatch({
          type: HOUSE_IMG,
          payload: this.state.img
        });
        
      }



    render() { 
        return (
               <div> <div>
                <div className="WizardApp">
                    <h2> This step Two!</h2>
                </div>
                
                </div>
          <input
            name="imgInput"
            className="form-control"
            id="imgInput"
            placeholder="IMG Url"
            onChange={e => this.setState({ img: e.target.value })}
          ></input>




<button onClick={this.setStateIMG(),
    event => (window.location.href = "/#/Wizard/stepThree")}>
          Next Step
        </button>




        <button onClick={() => {
            console.log("Pushing house to DB",)
            const reduxState = store.getState();
            axios.post('/api/houses', {
              house_name: reduxState.name,
              house_address: reduxState.address,
              city: reduxState.city,
              house_state: reduxState.house_state,
              zip: reduxState.zipcode,
              img: reduxState.img,
              mortgage: this.state.mortgage,
              rent: this.state.rent
            }
            
            )
            .catch(err => {
              console.log(err);
            });
          
            
          }
          }>Complete and save to DB!</button>
                </div>
            )}

}